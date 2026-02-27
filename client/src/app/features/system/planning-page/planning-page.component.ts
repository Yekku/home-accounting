import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';
import { BillService } from '../../../shared/services/bill.service';
import { CategoriesService } from '../../../shared/services/categories.service';
import { EventsService } from '../../../shared/services/events.service';
import { Bill } from '../../../shared/models/bill.model';
import { Category } from '../../../shared/models/category.model';
import { WFMEvent } from '../../../shared/models/event.model';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-planning-page',
  standalone: true,
  imports: [CommonModule, DecimalPipe, LoaderComponent],
  templateUrl: './planning-page.component.html',
})
export class PlanningPageComponent implements OnInit {
  private billService = inject(BillService);
  private categoriesService = inject(CategoriesService);
  private eventsService = inject(EventsService);
  private destroyRef = inject(DestroyRef);

  isLoaded = false;
  bill!: Bill;
  categories: Category[] = [];
  events: WFMEvent[] = [];

  ngOnInit(): void {
    combineLatest([
      this.billService.getBill(),
      this.categoriesService.getCategories(),
      this.eventsService.getEvents(),
    ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([bill, categories, events]) => {
        this.bill = bill;
        this.categories = categories;
        this.events = events;
        this.isLoaded = true;
      });
  }

  getCategoryCost(category: Category): number {
    return this.events
      .filter((e) => e.category === category._id && e.type === 'outcome')
      .reduce((total, e) => total + e.amount, 0);
  }

  getCatPercent(category: Category): string {
    const percent = (this.getCategoryCost(category) / category.capacity) * 100;
    return (percent > 100 ? 100 : percent) + '%';
  }

  getCatColorClass(category: Category): string {
    const percent = (this.getCategoryCost(category) / category.capacity) * 100;
    if (percent < 60) return 'success';
    if (percent < 100) return 'warning';
    return 'danger';
  }
}
