import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading = false;
  
  constructor(
    private userSrv: UsersService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { user, password } = this.loginForm.value;
    this.isLoading = true;
    this.userSrv.login(user, password).subscribe(data => {
      this.isLoading = false;
      this.userSrv.successLogin(data.rol, data.token);
      console.log(data);
    }, err => {
      this.isLoading = false;
      console.error(err);
    });

  }

}
