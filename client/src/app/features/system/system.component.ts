import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <div class="main-wrapper">
      <div class="app">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <article class="content dashboard-page">
          <router-outlet></router-outlet>
        </article>
      </div>
    </div>
  `,
})
export class SystemComponent {}
