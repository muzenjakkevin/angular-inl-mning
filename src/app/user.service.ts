import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urls: any = {
    users: 'https://jsonplaceholder.typicode.com/users'
  }

  constructor(private http: HttpClient) { }

    //Function below gets users from jsonplaceholder
    public getUsers(): Observable<any>{
      return this.http.get(this.urls.users)
    }
}
