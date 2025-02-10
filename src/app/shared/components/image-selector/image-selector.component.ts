import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BlogImage } from '../../models/blog-image';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-image-selector',
  standalone: true,                   // to convert to standalone component, add standalone and imports here; also remove @ViewChild... imageUploadForm
  imports: [FormsModule, AsyncPipe],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css'
})

export class ImageSelectorComponent implements OnInit {
  private file?: File;
  fileName: string = '';
  title: string = '';
  images$?: Observable<BlogImage[]>;
  
  constructor(private imageService: ImageService) {
  }
  
  ngOnInit(): void {
    this.getImages();
  }

  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadImage(form: any): void {
    if (this.file && this.fileName !== '' && this.title !== '') {
      // Image service to upload the image
      this.imageService.uploadImage(this.file, this.fileName, this.title)
      .subscribe({
        next: (response) => {
          form.reset();         // to convert to standalone component, also change this line from this.imageUploadForm?.resetForm();
          this.getImages();
        }
      });
    }
  }

  selectImage(image: BlogImage): void {
    this.imageService.selectImage(image);
  }

  private getImages() {
    this.images$ = this.imageService.getAllImages();
  }
}
