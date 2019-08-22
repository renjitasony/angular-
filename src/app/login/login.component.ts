import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  view:boolean= false;
  constructor() { }

  ngOnInit() {
  }
  public showSignUp() {
    this.view = !this.view;
  }

}
