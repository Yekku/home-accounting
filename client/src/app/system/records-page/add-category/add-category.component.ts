import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnDestroy {
  sub1: Subscription;
  name: string;
  capacity: number;

  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(private categoriesService: CategoriesService) {}

  onSubmit(form: NgForm) {
    this.name = form.value.name;
    this.capacity = form.value.capacity;
    if (this.capacity < 0) {
      this.capacity *= -1;
    }

    const category = new Category(this.name, this.capacity);

    this.sub1 = this.categoriesService
      .addCategory(category)
      .subscribe((cat: Category) => {
        form.reset();
        this.onCategoryAdd.emit(cat);
      });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
