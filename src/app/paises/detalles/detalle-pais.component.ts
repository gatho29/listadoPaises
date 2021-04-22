import { Component, OnInit } from '@angular/core';
import { ListadoPaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/interfaces';
@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  pais: Pais;

  constructor(private serviciosPaises: ListadoPaisesService) { }

  ngOnInit(): void {
    this.mostrarDetallePais();
  }

  mostrarDetallePais() {
    this.pais = this.serviciosPaises.paisSeleccionado;
  }

}
