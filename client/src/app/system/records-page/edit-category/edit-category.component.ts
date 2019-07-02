import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.service';
import { Message } from '../../../shared/models/message.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();


  currentCategoryId: string;
  currentCategory: Category;
  message: Message;

  sub1: Subscription;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.message = new Message('success', '');
    
  }

  onCategoryChange() {
    this.currentCategory = this.categories
      .find(c => c._id === this.currentCategoryId);
      console.log(this.currentCategory);
  }

  onSubmit(form: NgForm) {
    // tslint:disable-next-line:prefer-const
    let {capacity, name} = form.value;
    if (capacity < 0) {capacity *= -1; }

    const category = new Category(name, capacity);
    console.log('category:', category);
    this.sub1 = this.categoriesService.updateCategory(category)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((category: Category) => {
        this.onCategoryEdit.emit(category);
        this.message.text = 'Категория успешно отредактирована.';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
