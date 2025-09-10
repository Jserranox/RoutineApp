import { Routes } from '@angular/router';
import { CalendarLayoutComponent } from './pages/layout/layout.component';

export const CalendarRoutes: Routes = [
  {
    path: '',
    component: CalendarLayoutComponent,
    children: [
      {
        path: 'calendario',
        loadComponent: () => import('./pages/calendar-page/calendar-page.component')
      },
      {
        path: 'day',
        loadComponent: () => import("./pages/by-day-page/by-day-page.component")
      },
      {
        path: '**',
        redirectTo: 'calendario',
      }
    ]
  }
]

export default CalendarRoutes;
