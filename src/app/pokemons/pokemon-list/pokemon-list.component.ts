import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { getPokemonList } from '@shared/actions/pokemon.actions';
import { Pokemon } from '@shared/models/pokemon.model';
import { LoadingState } from '@shared/state/loading.state';
import { PokemonDetailState } from '@shared/state/pokemon-detail.state';
import { PokemonState } from '@shared/state/pokemon.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Select(PokemonState.getCardsList) pokemons$! : Observable<Pokemon[]>;
  @Select(LoadingState.getStatus) loadingStatus$!:Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getList('');
  }

  getList(payload: any) {
    //this.store.reset(PokemonDetailState)
    this.store.dispatch(new getPokemonList(payload));
  }
}
