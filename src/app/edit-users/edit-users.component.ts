import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

   public inputValue:string;
   public deleteValue: string;
  
  @Output() public addUserChild = new EventEmitter();  //Outputing newName to dashboard
  @Output() public removeUserChild = new EventEmitter(); //Outputting removeUser to dashboard

  constructor() { }

  //Function below emits and outputs to dashboard.
  addUser(): void{
    this.addUserChild.emit(this.inputValue);
  }
 //Function below emits and outputs to dashboard.
  removeUser(): void{
    this.removeUserChild.emit(this.deleteValue);
  }
  
  ngOnInit() {
  }
}
