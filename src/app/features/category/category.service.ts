import { Injectable } from '@angular/core';
import { AddCategoryRequest } from './models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // https://angular.dev/guide/http/setup
  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    // remove hard-coded url - use back ticks here instead of single quotes
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories`, model);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/categories`);
  }

}
