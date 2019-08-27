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
  public addData(clientData){
    let url ="http://localhost:8000/adddata";
    return this.httpclient.post(url,clientData);
  }
  public editData(pid){
    let url ="http://localhost:8000/editdata";
    return this.httpclient.post(url,{id:pid})
  }
}
