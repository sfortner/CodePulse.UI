import { Injectable } from '@angular/core';
import { AddCategoryRequest } from './models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';
import { environment } from '../../../environments/environment';
import { UpdateCategoryRequest } from './models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // https://angular.dev/guide/http/setup - import in app.config.ts
  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    // remove hard-coded url - use back ticks here instead of single quotes
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories`, model);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/categories`);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }

  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest) : Observable<Category> {
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/categories/${id}`, updateCategoryRequest);
  }

  deleteCategory(id: string) : Observable<Category> {
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }

}
