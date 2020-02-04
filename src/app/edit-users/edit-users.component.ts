import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

   public inputValue:string;
  
  @Output() public addUserChild = new EventEmitter();  //Outputing newName to dashboard

  constructor() { }

  //Function below emits and outputs to dashboard.
  addUser(): void{
    this.addUserChild.emit(this.inputValue);
    console.log(this.addUserChild);
  }

  removeUser(): void{
    console.log('remove button works');
  }

  ngOnInit() {
  }
}
