import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any[], texto: string): any[] {
    if (!texto) return value
    return value.filter(Paises => Paises.name.toUpperCase().includes(texto.toUpperCase())) 
    
  } 
}
