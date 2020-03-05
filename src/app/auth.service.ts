import { Injectable } from '@angular/core';
import { AdminFull } from '../app/models/admin-full.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedUser:string;

  constructor() { }

    // public admins:AdminFull[] = [{
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'john.doe@email.com',
    //   password: '1234567890'
    // }, {
    //   firstName: 'Kylie',
    //   lastName: 'Johnson',
    //   email: 'kylie.johnson@email.com',
    //   password: '0987654321'
    // }];

    checkIfLoggedIn(){
      return localStorage.getItem('user');
    }

    login(user){
      localStorage.setItem('user', user)
      this.loggedUser = user
    }

    logout(){
    }
 }
