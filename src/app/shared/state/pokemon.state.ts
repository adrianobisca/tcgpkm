import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { getPokemonList } from '@shared/actions/pokemon.actions';
import { PokemonList } from '@shared/models/pokemon.model';
import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { map } from 'rxjs/operators';

interface PokemonStateModel {
    data: PokemonList
}

@State<PokemonStateModel>({
    name: 'pokemonsCardList',
    defaults: {
        data: {
            data: [],
            page: 0,
            pageSize: 0,
            count: 0,
            totalCount: 0
        }
    }
})

@Injectable()
export class PokemonState {
    @Selector()
    static getCardsList(state: PokemonStateModel){
        return state.data.data;
    }

    constructor(private pokemonDataService: PokemonDataService) { }

    @Action(getPokemonList)
    getList({ patchState }: StateContext<PokemonStateModel>, { payload }: getPokemonList) {
        const OPTIONS = {
            pageSize : '50',
            name: payload
        }
        return this.pokemonDataService.getList(OPTIONS).pipe(
            map(response => {
                patchState({
                    data: response
                })

            })
        );
    }

}