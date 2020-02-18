import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

/**
 * @desc This class inputs the userList that is created in dashboard, for the names to show up
 * in the user list container. It also contains a function to make it possible to switch colors
 * of the names, between the color red and green.
*/

export class UsersListComponent implements OnInit {
  
  @Input() public userListParent;
  
  textColor: string = 'red';
  isStatement: boolean = false;
  
  constructor() { }

  //Function below toggles color between user in user list item.
  toggleColor(){
    if(this.isStatement = !this.isStatement){
      this.textColor = 'green';
    } else {
      this.textColor = 'red';
    }
  }

  ngOnInit() {
  }

}
