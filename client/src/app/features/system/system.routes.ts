import { Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { authGuard } from '../../core/guards/auth.guard';

export const SYSTEM_ROUTES: Routes = [
  {
    path: '',
    component: SystemComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'bill',
        loadComponent: () =>
          import('./bill-page/bill-page.component').then((m) => m.BillPageComponent),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./history-page/history-page.component').then((m) => m.HistoryPageComponent),
      },
      {
        path: 'history/:id',
        loadComponent: () =>
          import('./history-page/history-detail/history-detail.component').then(
            (m) => m.HistoryDetailComponent
          ),
      },
      {
        path: 'planning',
        loadComponent: () =>
          import('./planning-page/planning-page.component').then((m) => m.PlanningPageComponent),
      },
      {
        path: 'records',
        loadComponent: () =>
          import('./records-page/records-page.component').then((m) => m.RecordsPageComponent),
      },
    ],
  },
];
