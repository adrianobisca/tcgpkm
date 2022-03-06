import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm = this.formBuilder.group({
    pokemonName: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private pokemonDataService: PokemonDataService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const str = this.searchForm.value.pokemonName;
    this.pokemonDataService.getPokemonList('50', 'name', str);
    this.searchForm.reset();
  }
}
