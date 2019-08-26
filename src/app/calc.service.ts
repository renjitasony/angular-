import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  public addn(){
    return 10+20;
  }
  public add(x:number,y:number){
    return x+y;
  }
  public diff(x:number,y:number){
    return x-y;
  }
  public msg(x){
    return {wmsg:"Welcome "+x.name};
  }
}
