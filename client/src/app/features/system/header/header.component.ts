import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { DropdownDirective } from '../../../shared/directives/dropdown.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, DropdownDirective, DatePipe],
  template: `
    <header class="header">
      <div class="header-block header-block-search">
        {{ date | date : 'dd.MM.yyyy' }}
      </div>
      <div class="header-block header-block-nav">
        <ul class="nav-profile">
          <li class="profile dropdown" appDropdown>
            <a class="nav-link dropdown-toggle" role="button">
              <span class="name"> Welcome back, {{ name }} </span>
            </a>
            <div class="dropdown-menu profile-dropdown-menu">
              <a class="dropdown-item" [routerLink]="['/system', 'records']">
                <i class="fa fa-gear icon"></i>Add event
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" (click)="onLogout()">
                <i class="fa fa-power-off icon"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  date = new Date();
  name = '';

  ngOnInit(): void {
    const decoded = this.authService.getDecodedToken();
    this.name = decoded?.name || '';
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
