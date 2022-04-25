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
    },error => {
    this.alerter('Erreur recuperation des données !','error');
      console.log('Erreur recuperation des données ZOLA');
    });
  }
  updateInfo (){
    this.alerter('mise à jour en cours ...','info');
    this.dataService.updateInfo().subscribe(res=>{
      console.log('update infos',res);
      this.response = res;
      this.news = this.response.data.data;
      console.log('message',this.response.message);  
      // alert(this.response.message);
    }, error => {
    this.alerter('Erreur mise à jour des données !','error');
    })  
  }
  alerter(msg:any,ic:any){
    Swal.fire({
      title : msg,
      timerProgressBar: true,
      timer: 2000,
      icon: ic,
      position: 'top-end',
      showConfirmButton: false,
      toast: true,
    })
  }
}
