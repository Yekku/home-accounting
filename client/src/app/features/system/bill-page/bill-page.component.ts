import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, delay } from 'rxjs';
import { BillService } from '../../../shared/services/bill.service';
import { Bill } from '../../../shared/models/bill.model';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { BillCardComponent } from './bill-card/bill-card.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';

@Component({
  selector: 'app-bill-page',
  standalone: true,
  imports: [LoaderComponent, BillCardComponent, CurrencyCardComponent],
  templateUrl: './bill-page.component.html',
})
export class BillPageComponent implements OnInit {
  private billService = inject(BillService);
  private destroyRef = inject(DestroyRef);

  currency: any;
  bill!: Bill;
  isLoaded = false;

  ngOnInit(): void {
    combineLatest([this.billService.getBill(), this.billService.getCurrency()])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ([bill, currency]) => {
          this.bill = bill;
          this.currency = currency;
          this.isLoaded = true;
        },
        error: () => (this.isLoaded = true),
      });
  }

  onRefresh(): void {
    this.isLoaded = false;
    this.billService
      .getCurrency()
      .pipe(delay(2000), takeUntilDestroyed(this.destroyRef))
      .subscribe((currency) => {
        this.currency = currency;
        this.isLoaded = true;
      });
  }
}
