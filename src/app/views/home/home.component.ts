import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(map(result => result.matches),
    shareReplay()
  );


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
