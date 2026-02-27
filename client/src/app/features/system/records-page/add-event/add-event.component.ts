import { Component, Input, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';
import { BillService } from '../../../../shared/services/bill.service';
import { EventsService } from '../../../../shared/services/events.service';
import { Category } from '../../../../shared/models/category.model';
import { Bill } from '../../../../shared/models/bill.model';
import { WFMEvent } from '../../../../shared/models/event.model';
import { Message } from '../../../../core/models/message.model';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-event.component.html',
})
export class AddEventComponent {
  @Input() categories: Category[] = [];

  private billService = inject(BillService);
  private eventsService = inject(EventsService);
  private destroyRef = inject(DestroyRef);

  types = [
    { type: 'income', label: 'Income' },
    { type: 'outcome', label: 'Outcome' },
  ];

  message: Message = { type: 'success', text: '' };
  private bill!: Bill;

  onSubmit(form: NgForm): void {
    const { amount, description, category, type } = form.value;

    this.billService
      .getBill()
      .pipe(
        switchMap((bill: Bill) => {
          this.bill = bill;

          if (type === 'outcome' && amount > bill.value) {
            throw new Error(`Not enough money. Available: ${bill.value}`);
          }

          const newValue = type === 'outcome' ? bill.value - amount : bill.value + amount;
          const updatedBill: Bill = { value: newValue, currency: bill.currency };

          return this.billService.updateBill(updatedBill, bill._id!);
        }),
        switchMap(() => {
          const event: WFMEvent = {
            type,
            amount,
            category,
            description,
            date: new Date().toISOString(),
          };
          return this.eventsService.addEvent(event);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.message = { type: 'success', text: 'Event added successfully.' };
          form.reset();
          setTimeout(() => (this.message.text = ''), 3000);
        },
        error: (err) => {
          this.message = { type: 'danger', text: err.message || 'Error adding event.' };
          setTimeout(() => (this.message.text = ''), 3000);
        },
      });
  }
}
