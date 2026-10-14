import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { Product } from './models/product';
import { CartService } from './services/cart.service';
import { CartComponent } from './pages/cart/cart.component';

const product: Product = {
  id: 1, title: '<b>Test product</b>', description: 'Product description', thumbnail: '/product.png',
  price: 12.35, stock: 3, category: 'test', rating: 4, images: [],
};
const response = { products: [product], total: 21, skip: 0, limit: 10 };

describe('Product shopping flow', () => {
  let http: HttpTestingController;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes), provideHttpClient(), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpTestingController);
    harness = await RouterTestingHarness.create();
  });

  afterEach(() => {
    http.verify();
    vi.restoreAllMocks();
  });

  it('loads ten products per page, paginates search, and renders API text safely', async () => {
    await harness.navigateByUrl('/products?q=phone%20%26%20case&page=2');
    const request = http.expectOne((req) => req.url === 'https://dummyjson.com/products/search');
    expect(request.request.params.get('q')).toBe('phone & case');
    expect(request.request.params.get('limit')).toBe('10');
    expect(request.request.params.get('skip')).toBe('10');
    request.flush(response);
    harness.detectChanges();
    const element = harness.routeNativeElement!;
    expect(element.querySelector('.product-card h2')?.textContent).toBe(product.title);
    expect(element.querySelector('.product-card b')).toBeNull();
    expect(element.querySelector('[aria-current="page"]')?.textContent).toBe('2');
  });

  it('cancels an outdated request when search or page changes', async () => {
    await harness.navigateByUrl('/products');
    const oldRequest = http.expectOne((req) => req.url.endsWith('/products'));
    await harness.navigateByUrl('/products?q=new');
    expect(oldRequest.cancelled).toBe(true);
    http.expectOne((req) => req.url.endsWith('/search')).flush({ ...response, products: [], total: 0 });
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain('No products found.');
    expect(harness.routeNativeElement?.querySelector('.pagination')).toBeNull();
  });

  it('shows a recoverable error and retries a failed catalog request', async () => {
    await harness.navigateByUrl('/products');
    http.expectOne((req) => req.url.endsWith('/products')).flush('Unavailable', { status: 503, statusText: 'Unavailable' });
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain('Unable to load products.');
    harness.routeNativeElement?.querySelector<HTMLButtonElement>('[role="alert"] button')?.click();
    http.expectOne((req) => req.url.endsWith('/products')).flush(response);
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelectorAll('.product-card')).toHaveLength(1);
  });

  it('adds a product, updates quantities across routes, and prepares the receipt', async () => {
    await harness.navigateByUrl('/products/1');
    http.expectOne('https://dummyjson.com/products/1').flush(product);
    harness.detectChanges();
    harness.routeNativeElement?.querySelector<HTMLButtonElement>('[aria-label="Increase quantity"]')?.click();
    harness.routeNativeElement?.querySelector<HTMLButtonElement>('.add-to-cart')?.click();
    const cart = TestBed.inject(CartService);
    expect(cart.totalQuantity()).toBe(2);

    const component = await harness.navigateByUrl('/cart', CartComponent);
    expect(harness.routeNativeElement?.textContent).toContain('$24.70');
    harness.routeNativeElement?.querySelector<HTMLButtonElement>('[aria-label^="Increase quantity of"]')?.click();
    harness.detectChanges();
    expect(cart.totalQuantity()).toBe(3);
    expect(harness.routeNativeElement?.querySelector<HTMLButtonElement>('[aria-label^="Increase quantity of"]')?.disabled).toBe(true);
    expect(harness.routeNativeElement?.querySelector('.receipt-total')?.textContent).toContain('$37.05');
    expect(harness.routeNativeElement?.querySelector('.order-receipt b')).toBeNull();

    const print = vi.spyOn(window, 'print').mockImplementation(() => undefined);
    const printed = new Promise<void>((resolve) => print.mockImplementation(resolve));
    component.confirmOrder();
    await printed;
    expect(print).toHaveBeenCalledOnce();
    harness.routeNativeElement?.querySelector<HTMLButtonElement>('[aria-label^="Remove "]')?.click();
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain('Your cart is empty.');
    expect(harness.routeNativeElement?.querySelector<HTMLButtonElement>('.cart-summary button')?.disabled).toBe(true);
  });

  it('prevents adding an out-of-stock product', async () => {
    await harness.navigateByUrl('/products/1');
    http.expectOne('https://dummyjson.com/products/1').flush({ ...product, stock: 0 });
    harness.detectChanges();
    const addButton = harness.routeNativeElement?.querySelector<HTMLButtonElement>('.add-to-cart');
    expect(addButton?.disabled).toBe(true);
    expect(addButton?.textContent).toContain('Out of stock');
  });

  it('reports invalid product links without issuing an invalid API request', async () => {
    await harness.navigateByUrl('/products/not-a-number');
    expect(harness.routeNativeElement?.textContent).toContain('Product not found.');
    http.expectNone((req) => req.url.includes('/products/'));
  });
});
