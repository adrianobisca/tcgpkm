import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonDataService } from '@shared/services/pokemon-data.service';
import { PokemonList } from '@shared/models/pokemon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm = this.formBuilder.group({
    pokemonName: '',
  });

  asd! : Observable<PokemonList>;
  constructor(
    private formBuilder: FormBuilder,
    private pokemonDataService: PokemonDataService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.asd = this.pokemonDataService.pokemons$
  }

  onSubmit() {
    const isAtListPage = this.router.url.includes('list');

    if (!isAtListPage) {
      this.router.navigate([`/pokemon-list`]);
    }

    const str = this.searchForm.value.pokemonName;
    console.log(str)
    this.pokemonDataService.getPokemonList('50', 'name', str).subscribe();
    this.searchForm.reset();
  }
}
