import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Spinner1Component } from './component/spinner1/spinner1.component';
import { Spinner2Component } from './component/spinner2/spinner2.component';
import { Spinner3Component } from './component/spinner3/spinner3.component';

const routes: Routes = [
  { path: '', redirectTo: 'spinner1', pathMatch: 'full'},
  { path: 'spinner1', component: Spinner1Component },
  { path: 'spinner2', component: Spinner2Component },
  { path: 'spinner3', component: Spinner3Component },
  { path: '**', redirectTo: 'spinner1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
