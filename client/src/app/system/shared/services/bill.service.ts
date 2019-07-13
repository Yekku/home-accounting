import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Bill } from '../models/bill.model';
import { HttpService } from 'app/shared/services/http.service';
import { Http } from '@angular/http';

@Injectable()
export class BillService {
  constructor(private HttpService: HttpService) {}

  addBill(bill: Bill): Observable<Bill> {
    return this.HttpService.createPost('bills', bill);
  }

  getBill(): Observable<Bill> {
    return this.HttpService.createGet('bills');
  }

  updateBill(bill: Bill, _id: string): Observable<Bill> {
    return this.HttpService.createPut(`bills/${_id}`, bill);
  }

  getCurrency(): Observable<any> {
    return this.HttpService.get(
      `https://openexchangerates.org/api/latest.json?app_id=b911f8c6251143beb05a6dc0cfd9eb54`,
    );
  }
}
