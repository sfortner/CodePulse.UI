import { Injectable } from '@angular/core';
import { AddCategoryRequest } from './models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    // remove hard-coded url
    return this.http.post<void>('https://localhost:7219/api/categories', model);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('https://localhost:7219/api/categories');
  }

}
