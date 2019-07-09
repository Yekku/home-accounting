import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Bill } from '../models/bill.model';
import { HttpService } from 'app/shared/services/http.service';

@Injectable()
export class BillService {
  constructor(private HttpService: HttpService, public http: Http) {}

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
    return this.HttpService.createGet(
        `http://data.fixer.io/api/latest?access_key=50f8bded1c8cc758592581b654bb7126`,
      )
      .map((response: Response) => response.json());
  }
}
