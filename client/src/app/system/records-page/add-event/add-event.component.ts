import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import * as moment from 'moment';

import { Category } from '../../shared/models/category.model';
import { WFMEvent } from '../../shared/models/event.model';
import { EventsService } from '../../shared/services/events.service';
import { BillService } from '../../shared/services/bill.service';
import { Bill } from '../../shared/models/bill.model';
import { Message } from '../../../shared/models/message.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;
  @Input() categories: Category[] = [];

  types = [
    { type: 'income', label: 'Income' },
    { type: 'outcome', label: 'Outcome' },
  ];

  message: Message;
  bill: Bill;
  value = 0;
  amount: number;
  description: string;
  category: Category;
  type: string;

  constructor(
    private eventsService: EventsService,
    private billService: BillService,
  ) {}

  ngOnInit() {
    this.message = new Message('danger', '');
  }

  private showMessage(text: string) {
    this.message.text = text;
    window.setTimeout(() => (this.message.text = ''), 5000);
  }

  onSubmit(form: NgForm) {
    this.amount = form.value.amount;
    this.type = form.value.type;
    if (this.amount < 0) {
      this.amount *= -1;
    }
    const event = new WFMEvent(
      this.type,
      this.amount,
      form.value.category,
      moment().format('DD.MM.YYYY HH:mm:ss'),
      form.value.description
    );

    this.sub1 = this.billService.getBill()
    .subscribe(
      (bill: Bill) => {
      if (bill) {
        this.bill = bill;
        if (this.type === 'outcome') {
          if (this.amount > this.bill.value) {
            this.showMessage(
              `На счету недостаточно средств. Вам нехватает ${this.amount -
                this.bill.value}`,
            );
            return;
          } else {
            this.value = this.bill.value - this.amount;
          }
        } else {
          this.value = this.bill.value + this.amount;
        }
      }
      console.log('bill:', this.bill._id);
      console.log('value:', this.value);
      console.log('currency:', this.bill.currency);
      this.sub2 = this.billService
        .updateBill(this.value, this.bill.currency, this.bill._id)
        .mergeMap(() => this.eventsService.addEvent(event))
        .subscribe(() => {
          form.setValue({
            amount: 0,
            description: ' ',
            category: '',
            type: 'outcome',
          });
        });
    });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
