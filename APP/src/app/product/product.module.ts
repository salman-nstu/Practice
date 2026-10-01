import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list';

/**
 * ProductModule
 * ─────────────────────────────────────────────────────────────
 * Encapsulates everything related to the product feature:
 * components, pipes, directives, and services specific to products.
 * AppModule imports this module to make <app-product-list> available
 * in the root template.
 */
@NgModule({
  declarations: [
    ProductListComponent   // owns the component
  ],
  imports: [
    CommonModule           // gives access to *ngIf, *ngFor, etc.
  ],
  exports: [
    ProductListComponent   // makes <app-product-list> available to importers
  ]
})
export class ProductModule { }
