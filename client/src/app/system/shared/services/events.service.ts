import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WFMEvent } from '../models/event.model';
import { HttpService } from 'app/shared/services/http.service';

@Injectable()
export class EventsService {
  constructor(private http: HttpService) {}

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.http.createPost('events', event);
  }

  getEvents(): Observable<WFMEvent[]> {
    return this.http.createGet('events');
  }

  getEventById(id: string): Observable<WFMEvent> {
    return this.http.createGet(`events/${id}`);
  }
}
