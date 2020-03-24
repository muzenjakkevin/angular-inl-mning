import { Injectable } from '@angular/core';
import { AdminFull } from '../app/models/admin-full.model';
import { HttpClient } from '@angular/common/http';
import { user } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

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

    //Function below gets users from jsonplaceholder
    getUsersFromPlaceHolder(): Observable<user[]>{
      return this.http.get<user[]>(this._url);
    }

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
