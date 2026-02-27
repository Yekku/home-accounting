import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeStateTrigger } from '../../shared/animations/fade.animation';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet],
  animations: [fadeStateTrigger],
  template: `
    <div class="auth">
      <div class="auth-container">
        <div class="card">
          <header class="auth-header">
            <h1 class="auth-title">
              <div class="logo">
                <span class="l l1"></span>
                <span class="l l2"></span>
                <span class="l l3"></span>
                <span class="l l4"></span>
                <span class="l l5"></span>
              </div>
              Home bookkeeping
            </h1>
          </header>
          <div class="auth-content">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AuthComponent {}
