import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: any[] = [];
  constructor(public userSrv: UsersService) {}

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(data => {
      console.log(data);
      this.users = data.data;
    });
  }

  title = 'testAngular';
}


