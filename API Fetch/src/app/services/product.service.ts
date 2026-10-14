import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://dummyjson.com/products';
  readonly pageSize = 10;

  getProducts(page: number, query = '') {
    return this.http.get<ProductResponse>(`${this.baseUrl}${query ? '/search' : ''}`, {
      params: {
        limit: this.pageSize,
        skip: (page - 1) * this.pageSize,
        select: 'id,title,description,thumbnail,price',
        ...(query ? { q: query } : {}),
      },
    });
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
