import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { getPokemonList } from '@shared/actions/pokemon.actions';
import {
  setPaginator,
  setSearchParams,
} from '@shared/actions/search-params.actions';
import { searchParams } from '@shared/models/pokemon.model';

interface searchParamsModel {
  params: searchParams;
}

@State<searchParamsModel>({
  name: 'searchParams',
  defaults: {
    params: {
      pageSize: '50',
    },
  },
})
@Injectable()
export class SearchParamsState {
  @Selector()
  static getParams(state: searchParamsModel) {
    return state.params;
  }

  constructor() {}

  @Action(setSearchParams)
  setSearchParams(
    ctx: StateContext<searchParamsModel>,
    { params }: setSearchParams
  ) {
    ctx.patchState({ params: params });
    return ctx.dispatch(new getPokemonList());
  }

  @Action(setPaginator)
  setPaginator(ctx: StateContext<searchParamsModel>, { params }: setPaginator) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      params: { ...state.params, pageSize: params.pageSize, page: params.page },
    });
    return ctx.dispatch(new getPokemonList());
  }
}
