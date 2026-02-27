import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private http = inject(HttpClient);

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories');
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/categories/${id}`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('/api/categories', category);
  }

  updateCategory(category: Category, id: string): Observable<Category> {
    return this.http.put<Category>(`/api/categories/${id}`, category);
  }
}
