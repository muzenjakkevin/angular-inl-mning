import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

/**
 * @desc This class inputs a user from the userList array and places it in its own container,
 * it also inputs the text color from the users list component that is created with the function
 * inside the component.
*/

export class UserListItemComponent implements OnInit {

  @Input() public user;
  @Input() public textColor
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.user)
  }

}
