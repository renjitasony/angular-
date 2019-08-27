import { Component, OnInit } from '@angular/core';
import {ProducthandleService} from '../producthandle.service'

@Component({
  selector: 'app-viewp',
  templateUrl: './viewp.component.html',
  styleUrls: ['./viewp.component.css']
})
export class ViewpComponent implements OnInit {
  myproduct;
  view:boolean;
  constructor(private productservice:ProducthandleService) { }

  ngOnInit() {
    this.viewit();
  }
  public viewit(){
    this.view =true;
    this.productservice.viewData().subscribe(data=>{
      
      this.myproduct = data;
      console.log(this.myproduct[1].productid);
    });
  }

}
