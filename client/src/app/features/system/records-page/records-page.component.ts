import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CategoriesService } from '../../../shared/services/categories.service';
import { Category } from '../../../shared/models/category.model';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@Component({
  selector: 'app-records-page',
  standalone: true,
  imports: [LoaderComponent, AddEventComponent, AddCategoryComponent, EditCategoryComponent],
  templateUrl: './records-page.component.html',
})
export class RecordsPageComponent implements OnInit {
  private categoriesService = inject(CategoriesService);
  private destroyRef = inject(DestroyRef);

  categories: Category[] = [];
  isLoaded = false;

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((categories) => {
        this.categories = categories;
        this.isLoaded = true;
      });
  }

  newCategoryAdded(category: Category): void {
    this.categories.push(category);
  }

  categoryWasEdited(category: Category): void {
    const idx = this.categories.findIndex((c) => c._id === category._id);
    if (idx !== -1) {
      this.categories[idx] = category;
    }
  }
}
