import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  mrk:string;
  sts:string;
  constructor() { }

  ngOnInit() {
  }
  public mstatus(){
    if((parseInt(this.mrk)) >=50){

    }
  }
}
