import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Select, Store } from '@ngxs/store';
import {
  getCardsRarities,
  getCardsSubTypes,
  getCardsSuperTypes,
  getCardsTypes,
} from '@shared/actions/options.actions';
import { setSearchParams } from '@shared/actions/search-params.actions';
import { OptionsState } from '@shared/state/options.state';
import { Observable } from 'rxjs';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { SidebarComponent } from '@core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    PokemonListComponent,
    SidebarComponent,
  ],
})
export class DashboardComponent implements OnInit {
  @Select(OptionsState.getTypes) cardTypes$!: Observable<string[]>;
  @Select(OptionsState.getSubTypes) cardSubTypes$!: Observable<string[]>;
  @Select(OptionsState.getSuperTypes) cardSuperTypes$!: Observable<string[]>;
  @Select(OptionsState.getRarities) cardRarities$!: Observable<string[]>;

  searchForm = this.formBuilder.group({
    cardName: [''],
    type: [''],
    subtype: [''],
    supertype: [''],
    rarity: [''],
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new getCardsTypes());
    this.store.dispatch(new getCardsSubTypes());
    this.store.dispatch(new getCardsSuperTypes());
    this.store.dispatch(new getCardsRarities());
  }

  onSubmit() {
    console.log(this.searchForm.value.type);
    const name = !!this.searchForm.value.cardName
      ? `name:"${this.searchForm.value.cardName}*"`
      : '';
    const type = !!this.searchForm.value.type
      ? `(types:"${this.reduceOptions(
          'types',
          this.searchForm.value.type as unknown as string[]
        )}")`
      : '';
    const subtype = !!this.searchForm.value.subtype
      ? `(subtypes:"${this.reduceOptions(
          'subtypes',
          this.searchForm.value.subtype as unknown as string[]
        )}")`
      : '';
    const supertype = !!this.searchForm.value.supertype
      ? `(supertype:"${this.reduceOptions(
          'supertype',
          this.searchForm.value.supertype as unknown as string[]
        )}")`
      : '';
    const rarity = !!this.searchForm.value.rarity
      ? `(rarity:"${this.reduceOptions(
          'rarity',
          this.searchForm.value.rarity as unknown as string[]
        )}")`
      : '';
    console.log(rarity);
    const q = `${name} ${type} ${subtype} ${supertype} ${rarity}`;
    this.store.dispatch(new setSearchParams({ pageSize: '50', query: q }));
    this.searchForm.reset();
  }

  reduceOptions(type: string, values: string[]) {
    const concatOR = (a: string, b: string) => a + '" OR ' + type + ':"' + b;
    return values.reduce(concatOR);
  }
}
