import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { cardType } from '@shared/models/pokemon.model';

@Component({
  selector: 'app-type-img',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './type-img.component.html',
  styleUrls: ['./type-img.component.scss'],
})
export class TypeImgComponent {
  @Input() type!: cardType;

  ASSET_SOURCE_URL = 'assets/images/types/';
}
