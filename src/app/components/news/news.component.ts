import { Info } from './../../info';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:Array<Info>;
  p:number =1;

  response:any;
  constructor(private dataService:DataService) {
    this.news = new Array<Info>();
   }

  ngOnInit(): void {
    this.getDataNews();
  }

  getDataNews(){
    this.dataService.getData().subscribe(res =>{
      console.log('recuperation des données ZOLA');
      this.news = [];
      this.response = res;
      console.log(res);
      this.news = this.response;
      // this.perPage = this.response.perPage;
      // this.page = this.response.page;
      // this.lastPage = this.response.lastPage;
    });
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
