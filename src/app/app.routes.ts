import { Routes } from '@angular/router';
import { AuthPageComponent } from './auth/pages/auth-page/auth-page.component';
import { LayoutHomeComponent } from './home/layout/layout-home.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
  },
  {
    path: 'home',
    component: LayoutHomeComponent,
  },
  {
    path: 'excercises',
    loadChildren: () => import('./Excercises/excercise.routes')
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.routes')
  },
  {
    path: 'profile',
    loadChildren: () => import('./shared/shared.routes')
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];
