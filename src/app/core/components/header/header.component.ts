import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { getPokemonList } from '@shared/actions/pokemon.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
})
export class HeaderComponent implements OnInit {
  searchForm = this.formBuilder.group({
    pokemonName: '',
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private store:Store
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    const isAtListPage = this.router.url.includes('list');

    if (!isAtListPage) {
      this.router.navigate([`/pokemon-list`]);
    }

    const str = this.searchForm.value.pokemonName;
    this.store.dispatch(new getPokemonList(str))
    this.searchForm.reset();
  }
}
