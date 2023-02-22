import { searchParams } from "@shared/models/pokemon.model";

export class getPokemonList {
    static readonly type = '[POKEMONS] Get list'
    constructor(public payload: searchParams) { }
}
