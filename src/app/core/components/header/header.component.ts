import { Component, OnInit } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  goHome() {
    this.store.dispatch(new Navigate(['/']));
  }
}
