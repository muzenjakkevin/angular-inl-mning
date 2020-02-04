import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  public userList: string[] = []; //Array sends to user-list
  
  
  addUser(event){
    this.userList.push(event);
    console.log(this.userList);
  }
  
  ngOnInit() {
  
  }



}
