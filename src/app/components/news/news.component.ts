import { Info } from './../../info';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:Array<Info>;
  total:Number =100;
  perPage:Number =10;
  page:Number =1;
  lastPage:Number = 6;
  is_valid: boolean = false;
  response:any;
  constructor(private dataService:DataService) {
    this.news = new Array<Info>();
   }

  ngOnInit(): void {
    this.getDataNews();
  }

  getDataNews(){
    this.dataService.getData(this.page).subscribe(res =>{
      console.log('recuperation des données ZOLA');
      this.news = [];
      this.response = res;
      console.log(res);
      this.news = this.response.data;
      this.is_valid =true;
      this.total = this.response.total;
      this.perPage = this.response.perPage;
      this.page = this.response.page;
      this.lastPage = this.response.lastPage;
    });
  }
  paginer (t:Number){
    this.page = t;
    console.log('page',this.page);
    this.getDataNews();
  }
  updateInfo (){
    this.alertInfo('Informations en cours ...');
    this.dataService.updateInfo().subscribe(res=>{
      console.log('update infos',res);
      this.response = res;
      this.news = this.response.data.data;
      console.log('message',this.response.message);  
      // alert(this.response.message);
    })  
  }
  alertInfo(msg:any){
    Swal.fire({
      text: msg,
      title : 'Mise à jour',
      timerProgressBar: true,
      timer: 2000,
      icon: 'info',
      position: 'top-end',
      showConfirmButton: false,
      toast: true,
    })
  }
}
