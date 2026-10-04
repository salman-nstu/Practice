import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  productName = "KKKK";

  user = {
    name: 'Salman Khan',
    email: 'salman@gmail.com',
    age: 24
  };


  avatarUrl = 'https://i.pravatar.cc/80?img=12';

  isSaveDisabled = true;

  isInactive = true;

  products = [
    { name: 'Laptop', price: 800, inStock: true },
    { name: 'Smartphone', price: 500, inStock: true },
    { name: 'Headphones', price: 120, inStock: false },
    { name: 'Keyboard', price: 85, inStock: true }
  ];
}
