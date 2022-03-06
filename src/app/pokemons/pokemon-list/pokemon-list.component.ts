import { Component, OnInit } from '@angular/core';
import { PokemonList } from '@shared/models/pokemon';
import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons$!: Observable<PokemonList>;

  constructor(private pokemonDataService: PokemonDataService) {
  }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonDataService.pokemons$;
  }
}
