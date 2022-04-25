import { Info } from './../info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      console.log(res.data,'Data ');
      this.info = res.data;
      let infoEx = {
        'titre' : res.data.titre,
        'description' : res.data.description
      }
      this.editForm.setValue(infoEx);
    });
  }
  save(){
    console.log(this.info,'info à modifier ',this.editForm.value, 'edit form');
    this.info.titre = this.editForm.value.titre;
    this.info.description = this.editForm.value.description;
    console.log('info after edit',this.info);
    this.dataService.sendData(this.info).subscribe(res =>{
      Swal.fire({
        title : 'Modification',
        text : 'Modification avec succès',
        toast: true,
        showConfirmButton: false,
        position: 'top-end',
        timer: 2000,
        timerProgressBar: true,
      });
    });
  }
  editForm =  new FormGroup({
    titre : new FormControl(''),
    description : new FormControl('')
  })

}
