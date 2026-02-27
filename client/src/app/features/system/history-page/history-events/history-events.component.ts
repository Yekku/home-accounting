import { Component, Input } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../shared/models/category.model';
import { WFMEvent } from '../../../../shared/models/event.model';
import { FilterPipe } from '../../../../shared/pipes/filter.pipe';
import { DropdownDirective } from '../../../../shared/directives/dropdown.directive';

@Component({
  selector: 'app-history-events',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, DecimalPipe, DatePipe, FilterPipe, DropdownDirective],
  templateUrl: './history-events.component.html',
})
export class HistoryEventsComponent {
  @Input() categories: Category[] = [];
  @Input() events: WFMEvent[] = [];

  searchValue = '';
  searchField = 'amount';
  searchPlaceholder = 'Amount';

  getEventClass(event: WFMEvent): Record<string, boolean> {
    return {
      'label label-success': event.type === 'income',
      'label label-danger': event.type === 'outcome',
    };
  }

  changeCriteria(field: string): void {
    this.searchField = field;
    this.searchPlaceholder = field.charAt(0).toUpperCase() + field.slice(1);
  }
}
