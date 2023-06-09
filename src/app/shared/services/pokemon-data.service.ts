import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  PokemonDetail,
  PokemonList,
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
    const FORMATED_URL = `${environment.apiUrl}cards${ps}${p}${o}${n}${q}`;
    return this.httpClient.get<PokemonList>(FORMATED_URL);
  }

  getCardDetail(pokemonId: string): Observable<PokemonDetail> {
    const FORMATED_URL = `${environment.apiUrl}cards/${pokemonId}`;
    return this.httpClient.get<PokemonDetail>(FORMATED_URL);
  }
}
