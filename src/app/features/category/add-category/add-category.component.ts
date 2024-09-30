import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService: CategoryService, private router: Router) {
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit() {
    console.log(this.model);
    
    this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {        
        //console.log('This was successful!')
        this.router.navigateByUrl('/admin/categories');
      }
    })
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

}
