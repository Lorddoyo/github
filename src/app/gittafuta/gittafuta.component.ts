import { Component, OnInit } from '@angular/core';
import {Gittafuta} from '../gittafuta';
import {GittafutaService} from '../gittafuta.service';

@Component({
  selector: 'app-gittafuta',
  templateUrl: './gittafuta.component.html',
  styleUrls: ['./gittafuta.component.css'],
  providers:[GittafutaService]
})
export class GittafutaComponent implements OnInit {
  gittafuta:Gittafuta;
  userName:string;

  constructor(private gittafutaservice:GittafutaService) {
    this.gittafutaservice.userName="Lorddoyo";
    this.gittafutaservice.gittafutaRequest();
    this.gittafuta=this.gittafutaservice.gittafuta;


   }
   tafutaMsee(){
     this.gittafutaservice.tafutaMsee(this.userName)
     this.gittafutaservice.gittafutaRequest()
     this.gittafuta = this.gittafutaservice.gittafuta

   };



  ngOnInit() {

  }

}
