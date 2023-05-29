import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeImgComponent } from './type-img.component';

describe('TypeImgComponent', () => {
  let component: TypeImgComponent;
  let fixture: ComponentFixture<TypeImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TypeImgComponent]
    });
    fixture = TestBed.createComponent(TypeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
