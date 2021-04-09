import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';

const routes: Routes = [
  { path: '', component: DataViewComponent, data: { animationState: 'One' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataOutputRoutingModule { }
