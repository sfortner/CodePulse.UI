import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  //categories?: Category[];
  categories$?: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {    
  }  

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    /* this.categoryService.getAllCategories()
    .subscribe({
      next: (response) => {
        this.categories = response;
      }
    }); */
  }

}
