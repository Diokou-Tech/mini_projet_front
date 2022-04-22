import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url  = 'http://127.0.0.1:8000/api/infos/';
  url_update  = 'http://127.0.0.1:8000/api/refresh/infos';
  constructor(private HttpClient:HttpClient) { }
  getData(page:any){
    return this.HttpClient.get<any>(this.url + page);
  }
  getDataOne(titre:String){
    return this.HttpClient.get<any>(this.url + titre);
  }
  sendData(item:Info){
    return this.HttpClient.post(this.url,item);
  }
  updateInfo(){
    return this.HttpClient.get(this.url_update);
  }
}
