import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  heroes:Heroe[] = [];


  constructor(private router:Router) { }
  

  ngOnInit(): void {
  }

    buscarHeroe(termino:string){
     this.router.navigate(['/buscar', termino]);
    }


  }


  




// }
