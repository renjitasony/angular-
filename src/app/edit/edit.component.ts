import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ProducthandleService} from '../producthandle.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pid:string;
  pname:string;
  pprice:number;
  myproduct;
  constructor(private edroute:ActivatedRoute, private productService:ProducthandleService) { }
  
  ngOnInit() {
    this.pid= this.edroute.snapshot.paramMap.get('id');
    this.productService.editData(this.pid).subscribe(data=>{
      this.myproduct= data
      this.pid = this.myproduct.productid;
      this.pname = this.myproduct.productname;
      this.pprice = this.myproduct.productprice;
      console.log("id is"+this.pid);
    });

    
  }

}
