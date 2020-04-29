import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../_service'

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

/**
 * 
 */

export class LoginComponent implements OnInit {

currentUser: any;
loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
error: string;
success: string;

constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authService: AuthService
) {

}

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$')],
    password: ['', Validators.required]
  });
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

//Checks if the user is matching the one created in the fake backend, and sends it to local storage.
onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.error = null;
  this.success = null;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
    return;
  }

  this.loading = true;
  this.authService.login(this.f.username.value, this.f.password.value)
  .pipe(first())
  .subscribe(
    data => {
        this.router.navigate([this.returnUrl]);
    },
    error => {
        this.error = error;
        this.loading = false;
    });
  }

  //Removes item from localStorage
  logout(){
    this.authService.logout()
  }

  //Checks if localStorage contains item
  checkUser(){
    return Boolean(this.authService.checkIfLoggedIn())
  }
}