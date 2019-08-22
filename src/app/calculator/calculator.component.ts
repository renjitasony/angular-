import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  n1:string;
  n2:string;
  res:number;
  constructor() { }

  ngOnInit() {
  }
  public Add(){
    this.res = parseInt(this.n1)  +  parseInt( this.n2) 
  }
 
}
