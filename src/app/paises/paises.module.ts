import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePaisComponent } from './detalles/detalle-pais.component';
import { ListadoPaisesComponent } from './listado/listado-paises.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { BusquedaPipe } from '../pipes/busqueda.pipe';

@NgModule({
  declarations: [
    BusquedaPipe,
    DetallePaisComponent,
    ListadoPaisesComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    RouterModule,
    ComponentsModule,
  ],
  exports:[
    DetallePaisComponent,
    ListadoPaisesComponent,
    BuscadorComponent
  ], providers: [BusquedaPipe]
})
export class PaisesModule { }
