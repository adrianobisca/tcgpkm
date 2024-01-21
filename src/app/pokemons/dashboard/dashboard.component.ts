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
import { OptionsState, typesModel } from '@shared/state/options.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Select(OptionsState.getTypes) cardTypes$!: Observable<string[]>;
  @Select(OptionsState.getSubTypes) cardSubTypes$!: Observable<string[]>;
  @Select(OptionsState.getSuperTypes) cardSuperTypes$!: Observable<string[]>;
  @Select(OptionsState.getRarities) cardRarities$!: Observable<string[]>;

  searchForm = this.formBuilder.group({
    cardName: '',
    type: '',
    subtype: '',
    supertype: '',
    rarity: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new getCardsTypes());
    this.store.dispatch(new getCardsSubTypes());
    this.store.dispatch(new getCardsSuperTypes());
    this.store.dispatch(new getCardsRarities());
  }

  onSubmit() {
    const name = !!this.searchForm.value.cardName
      ? `name:"${this.searchForm.value.cardName}*"`
      : '';
    const type = !!this.searchForm.value.type
      ? `types:"${this.searchForm.value.type}"`
      : '';
    const subtype = !!this.searchForm.value.subtype
      ? `subtypes:"${this.searchForm.value.subtype}"`
      : '';
    const supertype = !!this.searchForm.value.supertype
      ? `supertype:"${this.searchForm.value.supertype}"`
      : '';
    const rarity = !!this.searchForm.value.rarity
      ? `rarity:"${this.searchForm.value.rarity}"`
      : '';
    const q = `${name} ${type} ${subtype} ${supertype} ${rarity}`;
    this.store.dispatch(new setSearchParams({ pageSize: '50', query: q }));
    this.searchForm.reset();
  }
}
