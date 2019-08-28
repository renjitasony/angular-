import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent implements OnInit {
  cname:string;
  pwd:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  public plzlogin(){
    this.router.navigateByUrl("/home")
  }
}
