import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LoadingState } from '@shared/state/loading.state';
import { Observable } from 'rxjs';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    standalone: true,
    imports: [NgIf, AsyncPipe],
})
export class LoadingComponent implements OnInit {
  @Select(LoadingState.getStatus) loading$! :Observable<boolean>; 
  constructor() {}
  ngOnInit(): void {}
}
