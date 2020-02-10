import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  public userList: string[] = []; //Array sends to user-list
  
  //Function below pushes new user to array.
  addUser(event){
    this.userList.push(event);
  }
  
  //Function below removes user to array.
  removeUser(){
    this.userList.pop();
  }

  ngOnInit() {
  
  }



}
