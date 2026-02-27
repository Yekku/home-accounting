import { Component, Output, EventEmitter, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CategoriesService } from '../../../../shared/services/categories.service';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-category.component.html',
})
export class AddCategoryComponent {
  @Output() onCategoryAdd = new EventEmitter<Category>();

  private categoriesService = inject(CategoriesService);
  private destroyRef = inject(DestroyRef);

  onSubmit(form: NgForm): void {
    const { name, capacity } = form.value;
    const category: Category = { name, capacity };

    this.categoriesService
      .addCategory(category)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((newCategory) => {
        this.onCategoryAdd.emit(newCategory);
        form.reset();
      });
  }
}
