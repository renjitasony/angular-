import { Component, OnInit } from '@angular/core';
// import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
// import {Inject,Injectable} from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  val;
  user;
  Name;
  Price;
  cart:any[]=[];
  // constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }
  constructor() { }

  ngOnInit() {
    // var sessiondata = JSON.parse(this.storage.get("Cart"));
    var sessiondata = JSON.parse(localStorage.getItem("Cart"));
    if(sessiondata != null){
      this.cart = sessiondata;
    }    
  }
  public AddCart(){
    var item = {pname:this.Name,pprice:parseInt(this.Price)};
    console.log(item);
    this.cart.push(item);
    
    // this.storage.set("Cart",JSON.stringify(this.cart));
    localStorage.setItem("Cart",JSON.stringify(this.cart));
  }
}
