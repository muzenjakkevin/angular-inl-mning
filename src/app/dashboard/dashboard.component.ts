import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

/** 
 * @desc this class holds an empty array and give the add and remove button
 * ability to add and remove the name that is added to the users list.
*/

export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }

  public userList = []; //Array sends to user-list

  getJsonUsers(){
    this.userService.getUsers()
    .subscribe((data) => { 
      // console.log(data)
      this.userList = data }
    )
  }
  //Function below pushes new user to array.
  addUser(event){
    this.userList.push(event);
  }
  
  //Function below removes user to array.
  removeUser(){
    this.userList.pop();
  }

  checkUser(){
    return Boolean(this.authService.checkIfLoggedIn())
  }

  ngOnInit() {
    this.getJsonUsers()
  }
}
