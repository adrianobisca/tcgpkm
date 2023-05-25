import { Component, Input, OnInit } from '@angular/core';
import { Attack } from '@shared/models/pokemon.model';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-wanna-be-modal',
    templateUrl: './wanna-be-modal.component.html',
    styleUrls: ['./wanna-be-modal.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class WannaBeModalComponent implements OnInit {

  @Input() attack!: Attack;

  constructor() { }

  ngOnInit(): void {
    console.log(this.attack)
  }

}
