import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { getPokemonDetail } from '@shared/actions/pokemon-detail.actions';
import { PokemonDetail } from '@shared/models/pokemon.model';
import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { map } from 'rxjs/operators';

interface PokemonDetailStateModel {
  data: PokemonDetail;
}

@State<PokemonDetailStateModel>({
  name: 'pokemonDetail',
  defaults: {
    data: {
      data: {
        id: '',

        name: '',
        supertype: '',
        subtypes: [],
        hp: '',
        types: [],
        rules: [],
        attacks: [
          {
            name: '',
            cost: [],
            convertedEnergyCost: 0,
            damage: '',
            text: '',
          },
        ],
        weaknesses: [
          {
            type: '',
            value: '',
          },
        ],
        retreatCost: [],
        convertedRetreatCost: 0,
        set: {
          id: '',
          name: '',
          series: '',
          printedTotal: 0,
          total: 0,
          legalities: {},
          ptcgoCode: '',
          releaseDate: '',
          updatedAt: '',
          images: {
            symbol: '',
            logo: '',
          },
        },
        number: '',
        artist: '',
        rarity: '',
        nationalPokedexNumbers: [],
        legalities: {},
        images: {
          small: '',
          large: '',
        },
        tcgplayer: {
          url: '',
          updatedAt: '',
          prices: {
            holofoil: {
              low: 0,
              mid: 0,
              high: 0,
              market: 0,
              directLow: 0,
            },
            reverseHolofoil: {
              low: 0,
              mid: 0,
              high: 0,
              market: 0,
            },
          },
        },
      },
    },
  },
})
@Injectable()
export class PokemonDetailState {
  @Selector()
  static getCard(state: PokemonDetailStateModel) {
    return state.data.data;
  }

  constructor(private pokemonDataService: PokemonDataService) {}

  @Action(getPokemonDetail)
  getDetail(
    { patchState }: StateContext<PokemonDetailStateModel>,
    { payload }: getPokemonDetail
  ) {
    return this.pokemonDataService.getCardDetail(payload).pipe(
      map((response) => {
        patchState({
          data: response,
        });
      })
    );
  }
}
