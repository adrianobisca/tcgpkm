import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { getPokemonDetail } from '@shared/actions/pokemon-detail.actions';
import { Pokemon } from '@shared/models/pokemon.model';
import { LoadingState } from '@shared/state/loading.state';
import { PokemonDetailState } from '@shared/state/pokemon-detail.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {

  @Select(PokemonDetailState.getCard) pokemonDetail$!: Observable<Pokemon>;
  @Select(LoadingState.getStatus) loading$!: Observable<boolean>;

  selectedAttack: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const pokemonId = routeParams.get('pokemonId');
    this.getCard(pokemonId ?? '')
  }
  openAttackModal(attack: any) {
    this.selectedAttack = attack;
  }

  getCard(id: string) {
    this.store.dispatch(new getPokemonDetail(id))
  }
}
