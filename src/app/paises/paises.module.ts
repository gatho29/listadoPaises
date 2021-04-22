import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePaisComponent } from './detalles/detalle-pais.component';
import { ListadoPaisesComponent } from './listado/listado-paises.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { BusquedaPipe } from '../pipes/busqueda.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DetallePaisComponent,
    ListadoPaisesComponent,
    BuscadorComponent,
    BusquedaPipe
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DetallePaisComponent,
    ListadoPaisesComponent,
    BuscadorComponent,
    BusquedaPipe
  ]
})
export class PaisesModule { }
