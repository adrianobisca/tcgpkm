import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  PokemonDetail,
  PokemonList,
  defaultResponse,
  searchParams,
} from '@shared/models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  constructor(private httpClient: HttpClient) {}

  getList(options: searchParams): Observable<PokemonList> {
    const ps = options.pageSize ? `?pageSize=${options.pageSize}` : '';
    const p = options.page ? `&page=${options.page}` : '';
    const o = options.orderType ? `&orderBy=${options.orderType}` : '';
    const n = options.name ? `&q=name:${options.name}*` : '';
    const q = options.query ? `&q=${options.query}` : '';
    const URL = `${environment.apiUrl}cards${ps}${p}${o}${n}${q}`;
    return this.httpClient.get<PokemonList>(URL);
  }

  getCardDetail(pokemonId: string): Observable<PokemonDetail> {
    const URL = `${environment.apiUrl}cards/${pokemonId}`;
    return this.httpClient.get<PokemonDetail>(URL);
  }

  getTypes(): Observable<defaultResponse> {
    const URL = `${environment.apiUrl}types`;
    return this.httpClient.get<defaultResponse>(URL);
  }

  getSubTypes(): Observable<defaultResponse> {
    const URL = `${environment.apiUrl}subtypes`;
    return this.httpClient.get<defaultResponse>(URL);
  }

  getSuperTypes(): Observable<defaultResponse> {
    const URL = `${environment.apiUrl}supertypes`;
    return this.httpClient.get<defaultResponse>(URL);
  }

  getRarities(): Observable<defaultResponse> {
    const URL = `${environment.apiUrl}rarities`;
    return this.httpClient.get<defaultResponse>(URL);
  }
}
