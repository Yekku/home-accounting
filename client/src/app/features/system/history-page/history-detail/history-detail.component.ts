import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';
import { EventsService } from '../../../../shared/services/events.service';
import { CategoriesService } from '../../../../shared/services/categories.service';
import { WFMEvent } from '../../../../shared/models/event.model';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-history-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe, DatePipe],
  templateUrl: './history-detail.component.html',
})
export class HistoryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private eventsService = inject(EventsService);
  private categoriesService = inject(CategoriesService);
  private destroyRef = inject(DestroyRef);

  event!: WFMEvent;
  category!: Category;
  isLoaded = false;

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => this.eventsService.getEventById(params['id'])),
        switchMap((event) => {
          this.event = event;
          return this.categoriesService.getCategoryById(event.category);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }
}
