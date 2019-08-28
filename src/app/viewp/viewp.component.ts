import { Component, OnInit } from '@angular/core';
import {ProducthandleService} from '../producthandle.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-viewp',
  templateUrl: './viewp.component.html',
  styleUrls: ['./viewp.component.css']
})
export class ViewpComponent implements OnInit {
  myproduct;
  view:boolean;
  search:string;
  constructor(private productservice:ProducthandleService,private router:Router) { }

  ngOnInit() {
    this.viewit();
    this.router.onSameUrlNavigation = "reload";
  }
  public viewit(){
    this.view =true;
    this.productservice.viewData().subscribe(data=>{
      
      this.myproduct = data;      
    });
  }
  public Edit(pid){
    this.router.navigate(['/edit',pid]);

  }
  public Delete(pid){
    this.productservice.deleteData(pid).subscribe(()=>{
              
      this.viewit();  
      
    });
    
  }
  public searchit(){

  }
}
