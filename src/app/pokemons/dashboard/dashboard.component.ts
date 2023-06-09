import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngxs/store';
import { setSearchParams } from '@shared/actions/search-params.actions';

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
export class DashboardComponent {
  cardTypes = [
    'Colorless',
    'Darkness',
    'Dragon',
    'Fairy',
    'Fighting',
    'Fire',
    'Grass',
    'Lightning',
    'Metal',
    'Psychic',
    'Water',
  ];

  searchForm = this.formBuilder.group({
    cardName: '',
    type: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  onSubmit() {
    const name = !!this.searchForm.value.cardName
      ? `name:"${this.searchForm.value.cardName}*"`
      : '';
    const type = !!this.searchForm.value.type
      ? `types:"${this.searchForm.value.type}"`
      : '';
    const q = `${name} ${type}`;
    this.store.dispatch(new setSearchParams({ pageSize: '50', query: q }));
    this.searchForm.reset();
  }
}
