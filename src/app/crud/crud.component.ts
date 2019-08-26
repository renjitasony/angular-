import { Component, OnInit } from '@angular/core';
import {ProducthandleService} from '../producthandle.service'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  myproduct;
  view:boolean;
  constructor(private pdctserver:ProducthandleService) { }

  ngOnInit() {
    this.view =false;
  }
  public add(){
    
  }
  public edit(){
    
  }
  public viewit(){
    this.view =true;
    this.pdctserver.viewData().subscribe(data=>{
      
      this.myproduct = data;
      console.log(this.myproduct.productid);
    });
  }
  public delete(){
    
  }
}
