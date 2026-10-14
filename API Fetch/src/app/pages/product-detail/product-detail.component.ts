import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of, startWith, Subject, switchMap } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(ProductService);
  readonly cart = inject(CartService);
  private readonly reload = new Subject<void>();
  readonly product = signal<Product | null>(null);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly quantity = signal(1);
  readonly message = signal('');

  constructor() {
    this.route.paramMap.pipe(
      switchMap((params) => this.reload.pipe(
        startWith(undefined),
        switchMap(() => {
          this.loading.set(true);
          this.error.set('');
          this.message.set('');
          this.product.set(null);
          const id = Number(params.get('id'));
          if (!Number.isSafeInteger(id) || id < 1) {
            this.error.set('Product not found.');
            return of(null);
          }
          return this.api.getProduct(id).pipe(catchError(() => {
            this.error.set('Unable to load this product. It may be unavailable. Please try again.');
            return of(null);
          }));
        }),
      )),
      takeUntilDestroyed(),
    ).subscribe((product) => {
      this.product.set(product);
      this.loading.set(false);
      const existing = this.cart.items().find((item) => item.id === product?.id);
      this.quantity.set(product ? Math.min(existing?.quantity ?? 1, product.stock) : 1);
    });
  }

  changeQuantity(change: number): void {
    const product = this.product();
    if (!product || product.stock < 1) return;
    this.quantity.update((quantity) => Math.max(1, Math.min(product.stock, quantity + change)));
    this.message.set('');
    // Preserve the original behavior: details also update an item already in the cart.
    if (this.cart.items().some((item) => item.id === product.id)) {
      this.cart.setProduct(product, this.quantity());
    }
  }

  addToCart(): void {
    const product = this.product();
    if (!product || product.stock < 1) return;
    this.cart.setProduct(product, this.quantity());
    this.message.set('Product added to cart.');
  }

  retry(): void {
    this.reload.next();
  }
}
