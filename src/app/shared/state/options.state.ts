import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  getCardsRarities,
  getCardsSubTypes,
  getCardsSuperTypes,
  getCardsTypes,
} from '@shared/actions/options.actions';
import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { map } from 'rxjs';

export interface typesModel {
  types: string[];
}
export interface subTypesModel {
  subtypes: string[];
}
export interface superTypesModel {
  supertypes: string[];
}
export interface raritiesModel {
  rarities: string[];
}

interface optionsModel
  extends typesModel,
    subTypesModel,
    superTypesModel,
    raritiesModel {}

@State<optionsModel>({
  name: 'options',
  defaults: {
    types: [''],
    subtypes: [''],
    supertypes: [''],
    rarities: [''],
  },
})
@Injectable()
export class OptionsState {
  @Selector()
  static getTypes(state: optionsModel) {
    return state.types;
  }
  @Selector()
  static getSubTypes(state: optionsModel) {
    return state.subtypes;
  }
  @Selector()
  static getSuperTypes(state: optionsModel) {
    return state.supertypes;
  }
  @Selector()
  static getRarities(state: optionsModel) {
    return state.rarities;
  }

  constructor(private pokemonDataService: PokemonDataService) {}

  @Action(getCardsTypes)
  getCardsTypes({ patchState }: StateContext<optionsModel>) {
    return this.pokemonDataService.getTypes().pipe(
      map((response) => {
        patchState({
          types: response.data,
        });
      })
    );
  }
  @Action(getCardsSubTypes)
  getCardsSubTypes({ patchState }: StateContext<optionsModel>) {
    return this.pokemonDataService.getSubTypes().pipe(
      map((response) => {
        patchState({
          subtypes: response.data,
        });
      })
    );
  }
  @Action(getCardsSuperTypes)
  getCardsSuperTypes({ patchState }: StateContext<optionsModel>) {
    return this.pokemonDataService.getSuperTypes().pipe(
      map((response) => {
        patchState({
          supertypes: response.data,
        });
      })
    );
  }
  @Action(getCardsRarities)
  getCardsRarities({ patchState }: StateContext<optionsModel>) {
    return this.pokemonDataService.getRarities().pipe(
      map((response) => {
        patchState({
          rarities: response.data,
        });
      })
    );
  }
}
