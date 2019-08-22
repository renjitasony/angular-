import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Name:String;
  Age:Number;
  email ="dsghdgs";
  address;
  Hobbiesa:[];
  Hobbies:String[];
  projects:any[] = [];
  constructor() {
    this.Name = "Arun";
    this.Age = 20;
    this.email = "arun@gmail.com";
    this.address = {Houseno:"HRA123",Street:"Line1",District:"TVM"}
    this.Hobbies = ["Reading","Chess","Dance"];
    this.projects=[{name:"p1",duration:"30days",enddate:"12/12/19"},{name:"p2",duration:"20days",enddate:"1/12/19"}]
   }
  
  ngOnInit() {
  }

}
