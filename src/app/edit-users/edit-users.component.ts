import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  userList = [""];
  taskInput = "";

  extraToAddUser(event: any){
    this.taskInput = event.target.value;
  }

  addUser(){
    this.userList.push(this.taskInput);
  }
}
