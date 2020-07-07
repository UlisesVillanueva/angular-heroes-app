import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;



  constructor(private _heroesService:HeroesService,
              private activateRoute:ActivatedRoute,
              private router:Router) { }
  

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      this.termino= params['termino'];
      this.heroes =  this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }


}
