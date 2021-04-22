import { Component, OnInit } from '@angular/core';
import { ListadoPaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  paises: Pais[] = [];
  filtroValor = '';

  constructor(
    private serviciosPaises: ListadoPaisesService,
    private ruta: Router) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.serviciosPaises.obtenerPaises().subscribe(
      paises => this.paises = paises,
      error => console.log(error)
    );
  }

  verDetallePais(pais: Pais) {
    this.serviciosPaises.paisSeleccionado = pais;
    this.ruta.navigateByUrl('/detalles');
  }

  obtenerPaisAFiltrar(value: string) {
    this.filtroValor = value;
  }

}
