import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  
  @Input() public userListParent;
  
  constructor() { }

  colorOfText(){
    console.log("this runs");
  }


  ngOnInit() {
    console.log(this.userListParent);
  }

}
