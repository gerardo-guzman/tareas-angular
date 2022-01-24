import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Tarea } from '../models/tarea.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUserInfo(): string {
    const user = localStorage.getItem('rol');
    return user;
  }

  login(user: string, password: string): Observable<any> {
    if (user === 'jerry' && password === 'jerry') {
      return of({
        token: "QpwL5tke4Pnpja7X4",
        rol: 'user'
      }).pipe(delay(2000));
    }
    if (user === 'admin' && password === 'admin') {
      return of({
        token: "QpwL5tke4Pnpja7X4",
        rol: 'admin'
      }).pipe(delay(2000));
    }
    return throwError({msg: 'Usuario y/o contraseña incorrectos'}).pipe(
      materialize(),
      delay(2000),
      dematerialize()
    );
  }

  successLogin(rol: 'admin' | 'user', token: string) {
    localStorage.removeItem('rol');
    localStorage.setItem('rol', rol);
    localStorage.setItem('token', token);
    return this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('rol');
    localStorage.removeItem('token');
    return this.router.navigate(['/login']);
  }

  guardarTareas(tareas: Tarea[]) {
    localStorage.setItem('tareas', JSON.stringify(tareas || []));
  }

  getTareas(): Tarea[] {
    const tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    return tareas;
  }

}
