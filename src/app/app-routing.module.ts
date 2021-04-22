import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPaisesComponent } from './paises/listado/listado-paises.component';

const routes: Routes = [
  { path: '', component: ListadoPaisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
