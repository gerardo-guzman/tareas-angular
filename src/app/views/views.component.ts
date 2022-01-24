import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(map(result => result.matches),
    shareReplay()
  );

  routes = [
    { title: 'Tareas', path: '/tareas', icon: 'app_registration' },
    { title: 'Clima', path: '/test-1', icon: 'ac_unit' },
    { title: 'Últimos Domingos', path: '/test-2', icon: 'event' },
    { title: 'Años bisiestos', path: '/test-3', icon: 'date_range' },
    { title: 'Matrix', path: '/test-4', icon: 'calculate' },
    { title: 'Contador de letras', path: '/test-5', icon: 'sort_by_alpha' }
  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userSrv: UsersService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.userSrv.logout();
  }

}
