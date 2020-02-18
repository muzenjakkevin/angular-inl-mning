import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  log(msg:any){console.log(msg);}

  loggedUser:string;
  checkIfLoggedIn(){

  }

  login(){

  }

  logout(){

  }
  constructor() { }
}