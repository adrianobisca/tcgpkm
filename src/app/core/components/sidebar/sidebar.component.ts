import { AsyncPipe, JsonPipe, LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Select } from '@ngxs/store';
import { OptionsState } from '@shared/state/options.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatCheckboxModule,
    AsyncPipe,
    LowerCasePipe,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Select(OptionsState.getTypes) cardTypes$!: Observable<string[]>;
  @Select(OptionsState.getSubTypes) cardSubTypes$!: Observable<string[]>;
  @Select(OptionsState.getSuperTypes) cardSuperTypes$!: Observable<string[]>;
  @Select(OptionsState.getRarities) cardRarities$!: Observable<string[]>;

  filtersForm = this.fb.group({
    types: this.fb.group({}),
    subtypes: this.fb.group({}),
    supertypes: this.fb.group({}),
    rarity: this.fb.group({}),
  });

  get formTypes() {
    return this.filtersForm.get('types') as FormGroup;
  }
  get formSubTypes() {
    return this.filtersForm.get('subtypes') as FormGroup;
  }
  get formSuperTypes() {
    return this.filtersForm.get('supertypes') as FormGroup;
  }
  get formRarities() {
    return this.filtersForm.get('rarity') as FormGroup;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cardTypes$.subscribe((types) => {
      for (const type of types) {
        this.formTypes.addControl(type, this.fb.control(false));
      }
    });
    this.cardSubTypes$.subscribe((subtypes) => {
      for (const subtype of subtypes) {
        this.formSubTypes.addControl(subtype, this.fb.control(false));
      }
    });
    this.cardSuperTypes$.subscribe((supertypes) => {
      for (const supertype of supertypes) {
        this.formSuperTypes.addControl(supertype, this.fb.control(false));
      }
    });
    this.cardRarities$.subscribe((rarities) => {
      for (const rarity of rarities) {
        this.formRarities.addControl(rarity, this.fb.control(false));
      }
    });
  }
}
