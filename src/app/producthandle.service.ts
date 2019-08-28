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
  public getData(pid){
    let url ="http://localhost:8000/editdata/"+pid;
    return this.httpclient.get(url)
  }
  public updateData(product){
    let url = "http://localhost:8000/update";
    return this.httpclient.post(url,product);
  }
  public deleteData(pid){
    let url = "http://localhost:8000/delete/"+pid;
    return this.httpclient.get(url);
  }
}
