import { Pokemon } from '@shared/models/pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonDataService } from '@shared/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() data!: Pokemon;

  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit(): void {}

  searchPokemon(id: string) {
    this.pokemonDataService.getPokemon(id);
  }
}
