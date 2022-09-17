import { LoadingService } from '@shared/services/loading.service';
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
  loading$!: Observable<boolean>;

  constructor(
    private pokemonDataService: PokemonDataService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonDataService.pokemons$;
    this.loading$ = this.loadingService.loading$;
    this.pokemonDataService.getPokemonList('50', 'name').subscribe();
  }
}
