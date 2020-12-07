import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

const routes: Routes = [
  { path: 'testA', component: ComponentAComponent },
  { path: 'testB', component: ComponentBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
