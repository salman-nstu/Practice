import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
    ProductModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
