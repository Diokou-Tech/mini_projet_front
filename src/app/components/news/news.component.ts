import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any;
  response:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getDataNews(1);
  }

  getDataNews(page:any){
    console.log('recuperation des données ZOLA');
    this.dataService.getData(page).subscribe(res =>{
      console.log('recupeartion données',res);
      this.response = res;
      this.news = this.response.data;
    });
  }
}
