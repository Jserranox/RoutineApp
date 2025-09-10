import { Routes } from '@angular/router';
import { LayoutSharedComponent } from './pages/layout/layout.component';

export const SharedRoutes: Routes = [
  {
    path: '',
    component: LayoutSharedComponent,
    children: [
      {
        path: 'perfil',
        loadComponent: () => import('./pages/profile-page/profile-page.component'),
      },
      {
        path: 'configuracion',
        loadComponent: () => import('./pages/settings-page/settings-page.component')
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

export default SharedRoutes;
