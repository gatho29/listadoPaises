import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises';

@Injectable({
  providedIn: 'root'
})
export class ListadoPaisesService {

  constructor(private http: HttpClient) { }

  obtenerPaises(): Observable<Paises[]> {
    return this.http.get<Paises[]>('https://restcountries.eu/rest/v2/all');
  }

}
