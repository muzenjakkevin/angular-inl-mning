import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: Object;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    
    //Keeps track of id
    this.activatedRoute.params.subscribe(
      (params) => {
        this.user = params.id;
      }
    )

  }

  //Holds information about users from jsonplaceholder
  ngOnInit() {
    this.userService.getUserInfo(this.user).then(
      (result) => {
        this.user = result;
      }
    )
  }

}
