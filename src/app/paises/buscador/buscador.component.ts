import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output('buscador') buscadorEmittter = new EventEmitter<string>();
  buscador = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.busqueda();
  }

  busqueda() {
    this.buscador.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => this.buscadorEmittter.emit(value));
  }



}
