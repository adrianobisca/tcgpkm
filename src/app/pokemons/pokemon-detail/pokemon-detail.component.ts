import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '@shared/models/pokemon';
import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetail$!: Observable<Pokemon>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pokemonDataService: PokemonDataService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const pokemonId = routeParams.get('pokemonId');
    this.pokemonDataService.getPokemon(pokemonId ? pokemonId : '');

    this.pokemonDetail$ = this.pokemonDataService.pokemonDetail$;
  }
  returnToHome(){
    this.router.navigate([`/pokemon-list`]);
  }

}
