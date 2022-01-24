import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const URL_BASE = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    public http: HttpClient
  ) { }

  getClima(params: {lat: string, lon: string}): Observable<any> {
    return this.http.get(`${URL_BASE}api/v1.0/weather`, { params })
  }

  getLastSundays(params: { fechaInicial: string, fechaFinal: string }): Observable<any> {
    return this.http.get(`${URL_BASE}api/v1.0/dates/lastSundays`, { params });
  }

  getBisiestos(params: { inicio: string, final: string }): Observable<any> {
    return this.http.get(`${URL_BASE}api/v1.0/dates/bisiestos`, { params });
  }

  getMatrixCoord(params: {n: string, rotate: string, coords: string}): Observable<any> {
    return this.http.get(`${URL_BASE}api/v1.0/math/matrix`, { params });
  }

  getContadorLetras(params: { texto: string }): Observable<any> {
    return this.http.get(`${URL_BASE}api/v1.0/math/letters`, { params });
  }
}
