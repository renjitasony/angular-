import { Component, OnInit } from '@angular/core';
import {ProducthandleService} from '../producthandle.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  serdata;
  pid:string;
  pname:string;
  pprice:string;
  constructor(private productService:ProducthandleService,private router:Router) { }

  ngOnInit() {
    
  }
  public Adddata(){
    var product = {pdid:this.pid,
                   pdname:this.pname,
                   pdprice:(parseInt(this.pprice) )
    };
    this.productService.addData(product).subscribe(data=>{
      this.serdata = data;
      this.router.navigateByUrl("/home/view");      
    });
  }
}
