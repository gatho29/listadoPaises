import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() nombre: string;

  constructor() { }

  ngOnInit(): void {
  }

}
