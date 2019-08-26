import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProducthandleService {

  constructor(private httpclient:HttpClient) { }
  public viewData(){
    let url ="http://localhost:8000/viewdata";
    return this.httpclient.get(url);
  }

}
