import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListadoPaisesService {

  paisSeleccionado: Pais;

  constructor(private http: HttpClient) { }

  obtenerPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>('https://restcountries.eu/rest/v2/all');
  }

}
