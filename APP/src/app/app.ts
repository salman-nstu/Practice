import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ProductListComponent } from './product-list/product-list';
import { FooterComponent } from './footer/footer';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ProductListComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
