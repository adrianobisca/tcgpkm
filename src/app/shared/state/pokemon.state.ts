import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { getPokemonList } from '@shared/actions/pokemon.actions';
import { PokemonList } from '@shared/models/pokemon.model';
import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { map } from 'rxjs/operators';
import { SearchParamsState } from './search-params.state';

interface PokemonStateModel {
  data: PokemonList;
}

@State<PokemonStateModel>({
  name: 'pokemonsCardList',
  defaults: {
    data: {
      data: [],
      page: 0,
      pageSize: 0,
      count: 0,
      totalCount: 0,
    },
  },
})
@Injectable()
export class PokemonState {
  @Selector()
  static getCardsList(state: PokemonStateModel) {
    return state.data.data;
  }
  @Selector()
  static getCardsListPagination(state: PokemonStateModel) {
    return {
      page: state.data.page,
      pageSize: state.data.pageSize,
      count: state.data.count,
      totalCount: state.data.totalCount,
    };
  }

  constructor(
    private pokemonDataService: PokemonDataService,
    private store: Store
  ) {}

  @Action(getPokemonList)
  getList({ patchState }: StateContext<PokemonStateModel>) {
    const params = this.store.selectSnapshot(SearchParamsState.getParams);
    return this.pokemonDataService.getList(params).pipe(
      map((response) => {
        patchState({
          data: response,
        });
      })
    );
  }
}
