import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { AdminLogin } from '../models/admin-login.model';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

adminLogin = new AdminLogin("","")

constructor(private authService: AuthService) {

}

  ngOnInit() {
  }

  checkLocalStorage(){
    return Boolean(this.authService.checkIfLoggedIn());
  }

  onSubmit(){
    this.authService.login(this.adminLogin)
  }

  logout(){
    this.authService.logout()
  }
}