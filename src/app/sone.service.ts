import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SoneService {

  constructor(private hc:HttpClient ) { }
  public getData(){
    let url = "http://localhost:8000/data";
    return this.hc.get(url);
  }
}
