import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises';
import { ListadoPaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  pais: Paises;

  constructor(private serviciosPaises: ListadoPaisesService) { }

  ngOnInit(): void {
    this.mostrarDetallePais();
  }

  mostrarDetallePais() {
    // this.pais = this.serviciosPaises.pais;
  }

}
