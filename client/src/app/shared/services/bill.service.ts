import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill.model';

@Injectable({ providedIn: 'root' })
export class BillService {
  private http = inject(HttpClient);

  getBill(): Observable<Bill> {
    return this.http.get<Bill>('/api/bills');
  }

  addBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>('/api/bills', bill);
  }

  updateBill(bill: Bill, id: string): Observable<Bill> {
    return this.http.put<Bill>(`/api/bills/${id}`, bill);
  }

  getCurrency(): Observable<any> {
    return this.http.get('https://open.er-api.com/v6/latest/EUR');
  }
}
