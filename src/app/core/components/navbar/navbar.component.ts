import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/features/auth/models/user.model';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule, CommonModule, NgIf],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
    user?: User;

    constructor(private authService: AuthService,
      private router: Router) {
    }

    ngOnInit(): void {
      this.authService.user()
      .subscribe({
        next: (response) => {
          this.user = response;
        }
      });
      this.user = this.authService.getUser();
    }

    onLogout(): void {
      this.authService.logout();
      this.router.navigateByUrl('/');
    }
  
  }
