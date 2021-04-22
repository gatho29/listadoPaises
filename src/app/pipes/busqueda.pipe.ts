import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any[], texto: string): any[] {
    if (!texto) {
      return value;
    } else {
      return value.filter(pais => pais.name.toUpperCase().includes(texto.toUpperCase()))
    }
  }
}
