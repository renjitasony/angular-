import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
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
  constructor(private edroute:ActivatedRoute,
              private productService:ProducthandleService,
              private router:Router) { }
  
  ngOnInit() {
    this.pid= this.edroute.snapshot.paramMap.get('id');
    if(!(this.pid=="0")){
      this.productService.getData(this.pid).subscribe(data=>{
        this.myproduct= data
        this.pid = this.myproduct.productid;
        this.pname = this.myproduct.productname;
        this.pprice = this.myproduct.productprice;
      });
    }
  }
  public Updatedata(){
    var product = {pid:this.pid,
                   pname:this.pname,
                   pprice:this.pprice
    };
    this.productService.updateData(product).subscribe();
    this.router.navigateByUrl("/home/view");
  }
}
