import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category.model';
import { HttpService } from 'app/shared/services/http.service';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpService) {}

  addCategory(category: Category): Observable<Category> {
    return this.http.createPost('categories', category);
  }

  getCategories(): Observable<Category[]> {
    return this.http.createGet('categories');
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.createPut(`categories/${category._id}`, category);
  }

  getCategoryById(_id: string): Observable<Category> {
    return this.http.createGet(`categories/${_id}`);
  }
}
