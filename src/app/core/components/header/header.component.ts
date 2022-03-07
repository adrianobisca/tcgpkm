import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonDataService } from '@shared/services/pokemon-data.service';

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
    private pokemonDataService: PokemonDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const isAtListPage = this.router.url.includes('list');

    if (!isAtListPage) {
      this.router.navigate([`/pokemon-list`]);
    }

    const str = this.searchForm.value.pokemonName;
    this.pokemonDataService.getPokemonList('50', 'name', str);
    this.searchForm.reset();
  }
}
