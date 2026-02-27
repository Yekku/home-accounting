import { Component, Input, Output, EventEmitter, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CategoriesService } from '../../../../shared/services/categories.service';
import { Category } from '../../../../shared/models/category.model';
import { Message } from '../../../../core/models/message.model';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-category.component.html',
})
export class EditCategoryComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  private categoriesService = inject(CategoriesService);
  private destroyRef = inject(DestroyRef);

  currentCategory: Category = { name: '', capacity: 0 };
  message: Message = { type: 'success', text: '' };

  ngOnInit(): void {
    if (this.categories.length > 0) {
      this.currentCategory = { ...this.categories[0] };
    }
  }

  onCategoryChange(id: string): void {
    const cat = this.categories.find((c) => c._id === id);
    if (cat) {
      this.currentCategory = { ...cat };
    }
  }

  onSubmit(form: NgForm): void {
    const { name, capacity } = form.value;
    const updated: Category = { name, capacity };

    this.categoriesService
      .updateCategory(updated, this.currentCategory._id!)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((category) => {
        this.onCategoryEdit.emit(category);
        this.message = { type: 'success', text: 'Category updated successfully.' };
        setTimeout(() => (this.message.text = ''), 3000);
      });
  }
}
