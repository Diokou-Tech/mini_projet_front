import { Info } from './../info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  info : Info ;
  titre :any;
  description : any;
  constructor(private route:ActivatedRoute,private dataService:DataService,private router: Router) { 
    this.info = new Info;
  }

  ngOnInit(): void {
    console.log('test edit info le parametre recupéré ' + this.route.snapshot.params['titre']);
    this.dataService.getDataOne(this.route.snapshot.params['titre']).subscribe(res=>{
      console.log(res);
      this.editForm.setValue(this.info);
    });
  }
  save(){
    console.log(this.info,'info à modifier ',this.editForm.value, 'edit form');
    this.info.titre = this.editForm.value.titre;
    this.info.description = this.editForm.value.description;
    console.log('info after edit',this.info);
  }
  editForm =  new FormGroup({
    titre : new FormControl(''),
    description : new FormControl('')
  })

}
