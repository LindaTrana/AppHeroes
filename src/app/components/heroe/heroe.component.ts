import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/Servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  heroe:any={}
  constructor(private activateR:ActivatedRoute,
              private hs:HeroesService) {


    this.activateR.params.subscribe(params=>{
      this.heroe=this.hs.getHeroe(params['id'])
    })
   }
   
  
  

}
