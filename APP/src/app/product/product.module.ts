import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list';

@NgModule({
  imports: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
