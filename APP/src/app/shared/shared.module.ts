import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

/**
 * SharedModule
 * ─────────────────────────────────────────────────────────────
 * Groups reusable layout components (Header + Footer).
 * Any feature module that imports SharedModule can use
 * <app-header> and <app-footer> in its templates.
 */
@NgModule({
  declarations: [
    HeaderComponent,   // owns the component
    FooterComponent    // owns the component
  ],
  imports: [
    CommonModule       // gives access to *ngIf, *ngFor, etc.
  ],
  exports: [
    HeaderComponent,   // makes <app-header> available to importers
    FooterComponent    // makes <app-footer> available to importers
  ]
})
export class SharedModule { }
