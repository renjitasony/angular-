import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service';
import { SoneService } from '../sone.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  val;
  msg;
  n1:string;
  n2:string;
  view:boolean;
  nameof:string;
  servermsg;
  
  constructor(private ds:CalcService,private ss:SoneService) { }

  ngOnInit() {
    this.val = this.ds.add(100,34);
    this.view = false;
  }
  public Passtoservice(add){
    if(add){
      this.val = this.ds.add(parseInt(this.n1),parseInt(this.n2));
    }else{
      this.val = this.ds.diff(parseInt(this.n1),parseInt(this.n2));
    }
    
    this.view = true;
  }
  public wlcm(){
    this.msg = this.ds.msg({name:this.nameof});
    this.view = true;
  }
  public callServer(){
    this.ss.getData().subscribe(data=>{
      console.log(data);
      this.servermsg = data;
      console.log(this.servermsg.msg);
      this.view = true;
    })
  }
}
