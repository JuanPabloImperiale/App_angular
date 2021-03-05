import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  heroes: Heroe[] = [];
/* esto se ejecuta antes de cargar la pagina es el contrsuctor */
  constructor( private _heroesService: HeroesService,
               private router: Router) { }


  /* esto se usa para cuando la pagina ya esta cargada renderizada!  */
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
