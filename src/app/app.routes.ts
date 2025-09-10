import { Routes } from '@angular/router';
import { AuthPageComponent } from './auth/pages/auth-page/auth-page.component';
import { LayoutHomeComponent } from './home/layout/layout-home.component';
import { NutritionPageComponent } from './nutrion/pages/nutrition-page/nutrition-page.component';

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
    path: 'nutrition',
    component: NutritionPageComponent
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];
