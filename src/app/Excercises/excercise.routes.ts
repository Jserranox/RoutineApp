import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const excercisesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'train',
        loadComponent: () => import('./pages/excersices-page/excersices-page.component'),
      },
      {
        path: 'by/:code',
        loadComponent: () => import('./pages/by-excercise/by-excercise.component')
      },
      {
        path: '**',
        redirectTo: 'train',
      }
    ]
  }
]

export default excercisesRoutes;
