import { Info } from './../info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  info : Info;
  constructor(private route:ActivatedRoute,private dataService:DataService) { 
    this.info = new Info;
  }

  ngOnInit(): void {
    console.log('test edit info le parametre recupéré ' + this.route.snapshot.params['titre']);
    this.dataService.getDataOne(this.route.snapshot.params['titre']).subscribe(res=>{
      console.log(res);
      this.info = res.data;
    });
  }
  save (){
    console.log(this.info,'info à modifier ');
  }

}
