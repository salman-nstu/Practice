import { computed, Injectable, signal } from '@angular/core';
import { CartItem, Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cartItems = signal<readonly CartItem[]>([]);
  readonly items = this.cartItems.asReadonly();
  readonly totalQuantity = computed(() => this.items().reduce((sum, item) => sum + item.quantity, 0));
  readonly totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + Math.round(item.price * 100) * item.quantity, 0) / 100,
  );

  setProduct(product: Product, quantity: number): void {
    if (!Number.isFinite(quantity) || product.stock < 1) return;
    const item: CartItem = {
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      stock: product.stock,
      quantity: Math.max(1, Math.min(Math.floor(quantity), product.stock)),
    };
    this.cartItems.update((items) => items.some((existing) => existing.id === product.id)
      ? items.map((existing) => existing.id === product.id ? item : existing)
      : [...items, item]);
  }

  changeQuantity(id: number, change: number): void {
    if (!Number.isInteger(change)) return;
    this.cartItems.update((items) => items
      .map((item) => item.id === id
        ? { ...item, quantity: Math.min(item.stock, item.quantity + change) }
        : item)
      .filter((item) => item.quantity > 0));
  }

  remove(id: number): void {
    this.cartItems.update((items) => items.filter((item) => item.id !== id));
  }
}
