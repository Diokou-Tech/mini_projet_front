import { Info } from './../../info';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
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
}
