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
    
    this.activatedRoute.params.subscribe(
      (params) => {
        this.user = params.id;
      }
    )

  }

  ngOnInit() {
    this.userService.getUserInfo(this.user).then(
      (result) => {
        this.user = result;
      }
    )
  }

}
