import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './currency-card.component.html',
})
export class CurrencyCardComponent {
  @Input() currency: any;

  currencies = ['USD', 'RUB'];
}
