import { Routes } from '@angular/router';

export const routes: Routes = [
  // ✅ Ruta raíz (localhost:4200/) - Carga la página About
  {
    path: '',
    loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.default),
  },
  // ✅ Ruta /about - Carga la página About
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.default),
  },
  // ✅ Ruta /pricing - Carga la página Pricing
  {
    path: 'pricing',
    loadComponent: () => import('./pricing-page/pricing-page/pricing-page.component').then(m => m.default),
  },
  // ✅ Ruta /contact - Carga la página Contact
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact-page/contact-page.component').then(m => m.default),
  },
  // ✅ Ruta comodín (**) - Cualquier ruta no definida redirige a 'about'
  {
    path: '**',
    redirectTo: 'about'
  }
];

