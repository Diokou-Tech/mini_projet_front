import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url  = 'http://127.0.0.1:8000/api/infos/';
  url_update  = 'http://127.0.0.1:8000/api/refresh/infos';
  url_info  = 'http://127.0.0.1:8000/api/info/';
  constructor(private HttpClient:HttpClient) { }
  getData(){
    return this.HttpClient.get<any>(this.url);
  }
  getDataOne(titre:String){
    return this.HttpClient.get<any>(this.url_info + titre);
  }
  sendData(item:Info){
    return this.HttpClient.post(this.url_info,[item]);
  }
  updateInfo(){
    return this.HttpClient.get(this.url_update);
  }
}
