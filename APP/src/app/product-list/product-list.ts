import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,   // ← must be false to belong to an NgModule
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  a: number = 4;
  user = {
    name: "sk",
    email: "salman@gmail.com",
    age: 20
  }
}

