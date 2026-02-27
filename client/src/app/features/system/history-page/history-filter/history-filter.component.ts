import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-history-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './history-filter.component.html',
  styles: [
    `
      .modal.fade.in {
        display: block;
        background: rgba(0, 0, 0, 0.5);
      }
    `,
  ],
})
export class HistoryFilterComponent {
  @Input() categories: Category[] = [];
  @Output() onFilterApply = new EventEmitter<any>();
  @Output() onFilterCancel = new EventEmitter<void>();

  timePeriods = [
    { type: 'd', label: 'Day' },
    { type: 'w', label: 'Week' },
    { type: 'M', label: 'Month' },
  ];

  types = [
    { type: 'income', label: 'Income' },
    { type: 'outcome', label: 'Outcome' },
  ];

  selectedPeriod = 'd';
  selectedTypes: string[] = [];
  selectedCategories: string[] = [];

  handleChangeType(target: EventTarget | null): void {
    const input = target as HTMLInputElement;
    if (input.checked) {
      this.selectedTypes.push(input.value);
    } else {
      this.selectedTypes = this.selectedTypes.filter((t) => t !== input.value);
    }
  }

  handleChangeCategory(target: EventTarget | null): void {
    const input = target as HTMLInputElement;
    if (input.checked) {
      this.selectedCategories.push(input.value);
    } else {
      this.selectedCategories = this.selectedCategories.filter((c) => c !== input.value);
    }
  }

  applyFilter(): void {
    this.onFilterApply.emit({
      period: this.selectedPeriod,
      types: this.selectedTypes,
      categories: this.selectedCategories,
    });
  }

  closeFilter(): void {
    this.onFilterCancel.emit();
  }
}
