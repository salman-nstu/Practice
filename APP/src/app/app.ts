import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { UserListComponent } from './user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
    ProductModule,
    UserListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
