import { CurrencyPipe } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, map, of, startWith, Subject, switchMap } from 'rxjs';
import { ProductSummary } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { getVisiblePages } from '../../utils/pagination.js';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, ReactiveFormsModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  private readonly api = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly reload = new Subject<void>();
  readonly search = new FormControl('', { nonNullable: true });
  readonly products = signal<ProductSummary[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly currentPage = signal(1);
  readonly query = signal('');
  readonly total = signal(0);
  readonly totalPages = computed(() => Math.ceil(this.total() / this.api.pageSize));
  readonly pages = computed(() => getVisiblePages(this.currentPage(), this.totalPages()));

  constructor() {
    this.route.queryParamMap.pipe(
      map((params) => {
        const requestedPage = Number(params.get('page') ?? 1);
        return {
          page: Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1,
          query: (params.get('q') ?? '').trim(),
        };
      }),
      distinctUntilChanged((previous, next) => previous.page === next.page && previous.query === next.query),
      switchMap(({ page, query }) => {
        this.currentPage.set(page);
        this.query.set(query);
        this.search.setValue(query, { emitEvent: false });
        return this.reload.pipe(
          startWith(undefined),
          switchMap(() => {
            this.loading.set(true);
            this.error.set('');
            return this.api.getProducts(page, query).pipe(
              catchError(() => {
                this.error.set('Unable to load products. Check your connection and try again.');
                return of(null);
              }),
            );
          }),
        );
      }),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((response) => {
      this.products.set(response?.products ?? []);
      this.total.set(response?.total ?? 0);
      this.loading.set(false);
      if (response && this.currentPage() > Math.max(1, this.totalPages())) {
        this.goToPage(Math.max(1, this.totalPages()));
      }
    });

    this.search.valueChanges.pipe(
      debounceTime(500),
      map((value) => value.trim()),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((query) => {
      if (query !== this.query()) {
        void this.router.navigate(['/products'], { queryParams: { q: query || null, page: 1 } });
      }
    });
  }

  goToPage(page: number): void {
    void this.router.navigate(['/products'], { queryParams: { q: this.query() || null, page } });
  }

  retry(): void {
    this.reload.next();
  }
}
