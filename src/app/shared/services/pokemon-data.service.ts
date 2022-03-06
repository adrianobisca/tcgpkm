import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from '@shared/models/pokemon';
import { map, shareReplay, Subject, tap } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private pokemonList = new Subject<PokemonList>();
  private pokemonDetail = new Subject<Pokemon>();

  pokemons$ = this.pokemonList.asObservable();
  pokemonDetail$ = this.pokemonDetail.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getPokemonList('50', 'name');
  }

  getPokemonList(pageSize: string, orderType: string, name?: string) {
    const url = this.assembleUrl('cards', pageSize, orderType, name);

    return this.httpClient
      .get(url)
      .pipe(
        tap(console.log),
        map((pokemons) => this.pokemonList.next(pokemons)),
        shareReplay()
      )
      .subscribe()
      .unsubscribe();
  }

  getPokemon(pokemonId: string) {
    const url = this.assembleUrl('cards/' + pokemonId);

    return this.httpClient
      .get(url)
      .pipe(
        tap(console.log),
        map((pokemon) => this.pokemonDetail.next(pokemon)),
        shareReplay()
      )
      .subscribe()
      .unsubscribe();
  }

  assembleUrl(endpoint: string, page?: string, order?: string, name?: string) {
    const pageSize = page ? `?pageSize=${page}` : '';
    const orderType = order ? `&orderBy=${order}` : '';
    const searchParams = name ? `&q=name:${name}*` : '';
    const apiUrl =
      environment.apiUrl + endpoint + pageSize + orderType + searchParams;
    return apiUrl;
  }
}
