import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the inventory alongside the existing store components', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header .brand')?.textContent).toContain('My Store');
    expect(compiled.querySelector('main h1')?.textContent).toContain('Store overview');
    expect(compiled.querySelector('app-user-profile')).not.toBeNull();
    expect(compiled.querySelector('app-user-list')).not.toBeNull();
    expect(compiled.querySelector('app-footer')).not.toBeNull();
    expect(compiled.querySelector('app-product-list h2')?.textContent).toContain(
      'Product Inventory',
    );
    expect(compiled.querySelectorAll('app-product-list .product-card')).toHaveLength(3);
  });
});
