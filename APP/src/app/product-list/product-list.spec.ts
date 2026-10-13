import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  function getCards(): HTMLElement[] {
    return Array.from(fixture.nativeElement.querySelectorAll('.product-card'));
  }

  function getButtons(card: HTMLElement): HTMLButtonElement[] {
    return Array.from(card.querySelectorAll('button'));
  }

  it('renders the sample inventory with formatted values and initial stock states', () => {
    const cards = getCards();
    expect(cards).toHaveLength(3);
    expect(cards.map((card) => card.querySelector('h3')?.textContent?.trim())).toEqual([
      'Wireless Mouse',
      'Mechanical Keyboard',
      'Usb-c Docking Station',
    ]);

    expect(cards[0].querySelector('.price')?.textContent).toMatch(/BDT\s*1,250\.50/);
    expect(cards[0].textContent).toContain('Oct 10, 2026');
    expect(cards[0].textContent).toContain('Rating: 4.5 / 5');
    expect(cards[0].textContent).toContain('Discount: 10%');
    expect(cards[1].textContent).toContain('Discount: 15%');
    expect(cards[2].textContent).toContain('Discount: 0%');

    expect(cards.map((card) => card.querySelector('.stock-label')?.textContent?.trim())).toEqual([
      'In stock',
      'Low stock',
      'Out of stock',
    ]);
    expect(cards[0].classList.contains('in-stock')).toBe(true);
    expect(cards[1].classList.contains('low-stock')).toBe(true);
    expect(cards[2].classList.contains('out-of-stock')).toBe(true);
    expect(getButtons(cards[2])[0].disabled).toBe(true);
  });

  it('updates the label, class, and color when stock crosses the low-stock threshold', async () => {
    const keyboard = getCards()[1];
    const [decrease, increase] = getButtons(keyboard);
    const status = keyboard.querySelector<HTMLElement>('.stock-label')!;

    increase.click();
    await fixture.whenStable();
    expect(keyboard.textContent).toContain('Available: 5 units');
    expect(status.textContent?.trim()).toBe('Low stock');
    expect(status.style.color).toBe('rgb(180, 83, 9)');

    increase.click();
    await fixture.whenStable();
    expect(keyboard.textContent).toContain('Available: 6 units');
    expect(status.textContent?.trim()).toBe('In stock');
    expect(keyboard.classList.contains('in-stock')).toBe(true);
    expect(keyboard.classList.contains('low-stock')).toBe(false);
    expect(status.style.color).toBe('rgb(21, 128, 61)');

    decrease.click();
    await fixture.whenStable();
    expect(keyboard.textContent).toContain('Available: 5 units');
    expect(status.textContent?.trim()).toBe('Low stock');
    expect(keyboard.classList.contains('low-stock')).toBe(true);
    expect(keyboard.classList.contains('in-stock')).toBe(false);
    expect(status.style.color).toBe('rgb(180, 83, 9)');
  });

  it('enables removal after restocking and disables it again when stock reaches zero', async () => {
    const dock = getCards()[2];
    const [decrease, increase] = getButtons(dock);
    const status = dock.querySelector<HTMLElement>('.stock-label')!;

    decrease.click();
    await fixture.whenStable();
    expect(component.products[2].stock).toBe(0);

    increase.click();
    await fixture.whenStable();
    expect(dock.textContent).toContain('Available: 1 units');
    expect(status.textContent?.trim()).toBe('Low stock');
    expect(dock.classList.contains('out-of-stock')).toBe(false);
    expect(dock.classList.contains('low-stock')).toBe(true);
    expect(decrease.disabled).toBe(false);

    decrease.click();
    await fixture.whenStable();
    expect(dock.textContent).toContain('Available: 0 units');
    expect(status.textContent?.trim()).toBe('Out of stock');
    expect(dock.classList.contains('out-of-stock')).toBe(true);
    expect(dock.classList.contains('low-stock')).toBe(false);
    expect(status.style.color).toBe('rgb(220, 38, 38)');
    expect(decrease.disabled).toBe(true);
  });

  it('never allows negative stock even when decreaseStock is called directly', () => {
    component.decreaseStock(3);
    component.decreaseStock(3);
    expect(component.products[2].stock).toBe(0);
  });

  it('updates only the selected product without mutating the previous inventory', () => {
    const previousProducts = component.products;
    const previousKeyboard = previousProducts[1];

    component.increaseStock(2);

    expect(component.products).not.toBe(previousProducts);
    expect(component.products[1].stock).toBe(5);
    expect(previousKeyboard.stock).toBe(4);
    expect(component.products[0]).toBe(previousProducts[0]);
    expect(component.products[2]).toBe(previousProducts[2]);

    component.decreaseStock(2);
    expect(component.products[1].stock).toBe(4);
    expect(component.products[0]).toBe(previousProducts[0]);
    expect(component.products[2]).toBe(previousProducts[2]);
  });

  it('renders an empty state when there are no products', async () => {
    component.products = [];
    fixture.debugElement.injector.get(ChangeDetectorRef).markForCheck();
    await fixture.whenStable();

    expect(getCards()).toHaveLength(0);
    expect(fixture.nativeElement.textContent).toContain('No products available.');
  });
});
