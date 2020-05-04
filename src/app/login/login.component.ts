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

  //Returns local storage as boolean
  checkLocalStorage(){
    return Boolean(this.authService.checkIfLoggedIn());
  }

  //Submits the form and pushes value up to local storage
  onSubmit(){
    this.authService.login(this.adminLogin)
  }

  //Removes item from local storage
  logout(){
    this.authService.logout()
  }
}