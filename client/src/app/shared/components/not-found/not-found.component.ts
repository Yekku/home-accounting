import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="text-center" style="margin-top: 100px;">
      <h2>404 - Page not found</h2>
      <p><a [routerLink]="['/login']">Go to login</a></p>
    </div>
  `,
})
export class NotFoundComponent {}
