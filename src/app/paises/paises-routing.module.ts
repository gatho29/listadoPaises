import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePaisComponent } from './detalles/detalle-pais.component';
import { ListadoPaisesComponent } from './listado/listado-paises.component';

const routes: Routes = [
  { path: '', component: ListadoPaisesComponent },
  { path: 'listado-paises', component: ListadoPaisesComponent },
  { path: 'detalle-pais', component: DetallePaisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
