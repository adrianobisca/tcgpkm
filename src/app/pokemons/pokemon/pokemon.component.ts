import {
  Component,
  ElementRef, HostListener,
  Input,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '@shared/models/pokemon.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class PokemonComponent implements OnInit {
  @Input() data!: Pokemon;

  constructor(private router: Router, private hostElement: ElementRef) {}

  ngOnInit(): void {}

  goToPokemonDetail(id: string) {
    this.router.navigate([`/pokemon-detail/${id}`]);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = e.offsetX;
    const y = e.offsetY;

    const middleX = this.hostElement.nativeElement.offsetWidth / 2;
    const middleY = this.hostElement.nativeElement.offsetHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 30;
    const offsetY = ((y - middleY) / middleY) * 30;

    this.hostElement.nativeElement.style.setProperty(
      '--rotateY',
      offsetX + 'deg'
    );
    this.hostElement.nativeElement.style.setProperty(
      '--rotateX',
      -1 * offsetY + 'deg'
    );
  }
}
