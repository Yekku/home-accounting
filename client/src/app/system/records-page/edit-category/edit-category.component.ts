import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.service';
import { Message } from '../../../shared/models/message.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "wfm-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.scss"],
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();
  currentCategory: Category;
  currentCategoryId: string;
  message: Message;
  sub1: Subscription;
  name: string;
  capacity: number;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.message = new Message('success', '');
    this.currentCategoryId = this.categories[0]._id;
    this.onCategoryChange(this.currentCategoryId);
  }

  onCategoryChange(currentCategoryId: string) {
    this.currentCategoryId = currentCategoryId;
    this.currentCategory = this.categories.find(
      (c) => c._id === this.currentCategoryId
    );
  }

  onSubmit(form: NgForm) {
    this.capacity = form.value.capacity;
    this.name = form.value.name;

    if (this.capacity < 0) {
      this.capacity *= -1;
    }
    const category = new Category(this.name, this.capacity);
    this.sub1 = this.categoriesService
      .updateCategory(category, this.currentCategoryId)
      .subscribe((cat: Category) => {
        form.reset();
        this.onCategoryEdit.emit(cat);
        this.message.text = 'Updated category success.';
        window.setTimeout(() => (this.message.text = ''), 5000);
      });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
