import { Component } from '@angular/core';
import {
  NgClass,
  NgStyle,
  CurrencyPipe,
  DatePipe,
  TitleCasePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  addedOn: string;
  rating: number;
  discount: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgClass, NgStyle, CurrencyPipe, DatePipe, TitleCasePipe, DecimalPipe, PercentPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  // Explicit UTC dates keep DatePipe from shifting the calendar day across time zones.
  products: Product[] = [
    {
      id: 1,
      name: 'wireless mouse',
      price: 1250.50,
      stock: 18,
      addedOn: '2026-10-10T00:00:00Z',
      rating: 4.5,
      discount: 0.10,
    },
    {
      id: 2,
      name: 'mechanical keyboard',
      price: 4500,
      stock: 4,
      addedOn: '2026-10-08T00:00:00Z',
      rating: 4.8,
      discount: 0.15,
    },
    {
      id: 3,
      name: 'usb-c docking station',
      price: 3200,
      stock: 0,
      addedOn: '2026-09-25T00:00:00Z',
      rating: 4.2,
      discount: 0,
    },
  ];

  getStockStatus(stock: number): string {
    if (stock === 0) {
      return 'Out of stock';
    }

    if (stock <= 5) {
      return 'Low stock';
    }

    return 'In stock';
  }

  increaseStock(id: number): void {
    this.products = this.products.map(product =>
      product.id === id ? { ...product, stock: product.stock + 1 } : product
    );
  }

  decreaseStock(id: number): void {
    this.products = this.products.map(product =>
      product.id === id ? { ...product, stock: Math.max(0, product.stock - 1) } : product
    );
  }

  length(arr: []): number {
    return arr.length
  }
}
