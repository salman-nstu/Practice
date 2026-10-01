import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';

/**
 * AppComponent (Standalone Root Component)
 * ─────────────────────────────────────────────────────────────
 * In Angular 17+, the root component is standalone.
 * Instead of importing individual components, it imports
 * entire NgModules — SharedModule and ProductModule.
 *
 * This demonstrates how NgModules act as "packages":
 *  • SharedModule provides <app-header> and <app-footer>
 *  • ProductModule provides <app-product-list>
 *
 * A standalone component can import NgModules just like it
 * imports standalone components, making NgModules reusable
 * units that can be plugged in anywhere.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,   // ← brings in HeaderComponent + FooterComponent
    ProductModule   // ← brings in ProductListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
