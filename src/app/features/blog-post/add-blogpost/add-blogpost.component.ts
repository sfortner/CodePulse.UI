import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, DatePipe } from '@angular/common';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-add-blogpost',
  standalone: true,
  imports: [FormsModule, DatePipe, MarkdownComponent, AsyncPipe],
  templateUrl: './add-blogpost.component.html',
  styleUrl: './add-blogpost.component.css'
})
export class AddBlogpostComponent {
  model: AddBlogPost;

  constructor(private blogPostService: BlogPostService, private router: Router) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date()
    }
  }

  onFormSubmit(): void {
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/blogposts');
      }
    });
  }

}
