import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../blog-post/models/blog-post-model';
import { Observable } from 'rxjs';
import { BlogPostService } from '../blog-post/services/blog-post.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-blogpost-list',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './blogpost-list.component.html',
  styleUrl: './blogpost-list.component.css'
})
export class BlogpostListComponent implements OnInit {

  blogPosts$?: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) {
  }

  ngOnInit(): void {
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();
  }

}
