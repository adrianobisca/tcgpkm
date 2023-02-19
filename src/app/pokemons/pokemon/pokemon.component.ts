import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '@shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() data!: Pokemon;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPokemonDetail(id: string) {
    this.router.navigate([`/pokemon-detail/${id}`]);
  }
}
