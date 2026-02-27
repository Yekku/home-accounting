import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WFMEvent } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private http = inject(HttpClient);

  getEvents(): Observable<WFMEvent[]> {
    return this.http.get<WFMEvent[]>('/api/events');
  }

  getEventById(id: string): Observable<WFMEvent> {
    return this.http.get<WFMEvent>(`/api/events/${id}`);
  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.http.post<WFMEvent>('/api/events', event);
  }
}
