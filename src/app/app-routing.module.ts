import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopHeaderComponent } from './shared/directives/top-header/top-header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-input',
    pathMatch: 'full'
  },
  {
    path: 'data-input',
    loadChildren: () => import('./data-input-module/data-input.module').then(m => m.DataInputModule)
  },
  {
    path: 'data-output',
    loadChildren: () => import('./data-output-module/data-output.module').then(m => m.DataOutputModule)
  },
  { path: '', component: TopHeaderComponent, outlet: 'topbar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
