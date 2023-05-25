import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { getPokemonList } from '@shared/actions/pokemon.actions';
import { Pokemon } from '@shared/models/pokemon.model';
import { LoadingState } from '@shared/state/loading.state';
import { PokemonDetailState } from '@shared/state/pokemon-detail.state';
import { PokemonState } from '@shared/state/pokemon.state';
import { Observable } from 'rxjs';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        PokemonComponent,
        AsyncPipe,
    ],
})
export class PokemonListComponent implements OnInit {
  @Select(PokemonState.getCardsList) pokemons$!: Observable<Pokemon[]>;
  @Select(LoadingState.getStatus) loadingStatus$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getList({ pageSize: '50' });
  }

  getList(payload: any) {
    //this.store.reset(PokemonDetailState)
    this.store.dispatch(new getPokemonList(payload));
  }
}
