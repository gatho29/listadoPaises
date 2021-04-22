import { Component, OnInit } from '@angular/core';
import { ListadoPaisesService } from '../../services/paises.service';
import { Paises } from '../../interfaces/paises';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  paises: Paises[] = [];
  filtroValor = '';

  constructor(
    private serviciosPaises: ListadoPaisesService,
    private ruta: Router) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.serviciosPaises.obtenerPaises().subscribe(
      respuesta => this.paises = respuesta,
      error => console.log(error)
    );
  }

  // detalleDelPais(pais: Paises) {
  //   this.serviciosPaises.pais = pais
  //   this.ruta.navigateByUrl('/detalle-pais');
  // }

  obtenerPaisAFiltrar(value: string) {
    this.filtroValor = value;
  }

}
