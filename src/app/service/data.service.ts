import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient:HttpClient) { }
  getData(page:any){
    return this.HttpClient.get<any>('http://127.0.0.1:8000/api/infos/'+ page);
  }
  getDataOne(titre:String){
    return this.HttpClient.get<any>('http://127.0.0.1:8000/api/info/'+ titre);
  }
  sendData(item:Info){
    return this.HttpClient.post('http://127.0.0.1:8000/api/info/',item);
  }
}
