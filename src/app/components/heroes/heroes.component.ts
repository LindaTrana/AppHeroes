import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/Servicios/heroes.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[]

  constructor( private _heroesService:HeroesService,
               private router:Router) { }

  ngOnInit() {
    this.heroes=this._heroesService.getHerores()
    console.log(this.heroes)
  }

  verHeroe(id:number){
    console.log(id)
    this.router.navigate(['/heroe',id])
  }

}
