import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Bill } from '../../../../shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './bill-card.component.html',
})
export class BillCardComponent implements OnInit {
  @Input() bill!: Bill;
  @Input() currency: any;

  dollar = 0;
  rub = 0;

  ngOnInit(): void {
    if (this.currency?.rates) {
      this.dollar = this.bill.value * (this.currency.rates['USD'] || 1);
      this.rub = this.bill.value * (this.currency.rates['RUB'] || 1);
    }
  }
}
