import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent
  },
  {
    path: 'portal',
    loadChildren: () => import('./pages/portal/portal.module')
      .then(p => p.PortalModule)
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'panel',
    loadChildren: () => import('./pages/panel/panel.module')
      .then(p => p.PanelModule)
  },
 
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
