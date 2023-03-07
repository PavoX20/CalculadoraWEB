import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionesComponent } from './components/operaciones/operaciones.component';

const routes: Routes = [
  {path: 'calculadora', component:OperacionesComponent},
  {path: '**', component:OperacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
