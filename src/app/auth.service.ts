import { Injectable } from '@angular/core';
import { AdminFull } from '../app/models/admin-full.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

    public admins:AdminFull[] = [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      password: '1234567890'
    }, {
      firstName: 'Kylie',
      lastName: 'Johnson',
      email: 'kylie.johnson@email.com',
      password: '0987654321'
    }];

    // Function checks if local storage is true
    checkIfLoggedIn(){
      return localStorage.getItem('user');
    }

    // Function pushes name to local storage to change between screens
    login(){
      let loggedUser:any = document.getElementById("name");
      localStorage.setItem('user', loggedUser.value)
    }

    // Function clears local storage and makes it false
    logout(){
      localStorage.clear();
    }
 }
