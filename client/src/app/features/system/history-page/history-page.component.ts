import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isWithinInterval, parseISO } from 'date-fns';
import { CategoriesService } from '../../../shared/services/categories.service';
import { EventsService } from '../../../shared/services/events.service';
import { Category } from '../../../shared/models/category.model';
import { WFMEvent } from '../../../shared/models/event.model';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { HistoryChartComponent } from './history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-events/history-events.component';
import { HistoryFilterComponent } from './history-filter/history-filter.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [LoaderComponent, HistoryChartComponent, HistoryEventsComponent, HistoryFilterComponent],
  templateUrl: './history-page.component.html',
})
export class HistoryPageComponent implements OnInit {
  private categoriesService = inject(CategoriesService);
  private eventsService = inject(EventsService);
  private destroyRef = inject(DestroyRef);

  isLoaded = false;
  isFilterVisible = false;
  categories: Category[] = [];
  events: WFMEvent[] = [];
  filteredEvents: WFMEvent[] = [];
  chartData: { name: string; value: number }[] = [];

  ngOnInit(): void {
    combineLatest([this.categoriesService.getCategories(), this.eventsService.getEvents()])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([categories, events]) => {
        this.categories = categories;
        this.events = events.map((e) => ({
          ...e,
          catName: categories.find((c) => c._id === e.category)?.name || '',
        }));
        this.filteredEvents = [...this.events];
        this.calculateChartData();
        this.isLoaded = true;
      });
  }

  openFilter(): void {
    this.isFilterVisible = true;
  }

  onFilterCancel(): void {
    this.isFilterVisible = false;
  }

  onFilterApply(filterData: any): void {
    this.isFilterVisible = false;
    this.filteredEvents = [...this.events];

    if (filterData.types && filterData.types.length > 0) {
      this.filteredEvents = this.filteredEvents.filter((e) => filterData.types.includes(e.type));
    }

    if (filterData.categories && filterData.categories.length > 0) {
      this.filteredEvents = this.filteredEvents.filter((e) =>
        filterData.categories.includes(e.category)
      );
    }

    if (filterData.period) {
      const now = new Date();
      let start: Date;
      let end: Date;

      switch (filterData.period) {
        case 'd':
          start = startOfDay(now);
          end = endOfDay(now);
          break;
        case 'w':
          start = startOfWeek(now);
          end = endOfWeek(now);
          break;
        case 'M':
          start = startOfMonth(now);
          end = endOfMonth(now);
          break;
        default:
          start = startOfMonth(now);
          end = endOfMonth(now);
      }

      this.filteredEvents = this.filteredEvents.filter((e) => {
        const eventDate = parseISO(e.date);
        return isWithinInterval(eventDate, { start, end });
      });
    }

    this.calculateChartData();
  }

  private calculateChartData(): void {
    this.chartData = this.categories.map((cat) => {
      const sum = this.filteredEvents
        .filter((e) => e.category === cat._id && e.type === 'outcome')
        .reduce((total, e) => total + e.amount, 0);
      return { name: cat.name, value: sum };
    });
  }
}
