import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

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
