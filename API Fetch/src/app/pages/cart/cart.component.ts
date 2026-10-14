import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  readonly cart = inject(CartService);
  readonly orderDate = signal(new Date());

  confirmOrder(): void {
    if (this.cart.items().length === 0) return;
    this.orderDate.set(new Date());
    // Allow Angular to render the receipt timestamp before opening the print dialog.
    requestAnimationFrame(() => window.print());
  }
}
