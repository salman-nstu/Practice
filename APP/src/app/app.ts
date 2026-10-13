import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ProductListComponent } from './product-list/product-list';
import { UserListComponent } from './user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
    ProductListComponent,
    UserListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
