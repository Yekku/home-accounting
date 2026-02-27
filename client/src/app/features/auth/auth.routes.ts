import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'registration',
        loadComponent: () =>
          import('./registration/registration.component').then((m) => m.RegistrationComponent),
      },
    ],
  },
];
