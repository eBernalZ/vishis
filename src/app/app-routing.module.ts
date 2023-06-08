import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'map',
    loadChildren: () => import('./_modules/map/map.module').then(m => m.MapModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./_modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./_modules/legal/legal.module').then(m => m.LegalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
