import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductListComponent, title: 'Products | API Fetch' },
  { path: 'products/:id', component: ProductDetailComponent, title: 'Product details | API Fetch' },
  { path: 'cart', component: CartComponent, title: 'Cart | API Fetch' },
  { path: '**', redirectTo: 'products' },
];
