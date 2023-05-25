import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WannaBeModalComponent } from './wanna-be-modal.component';

describe('WannaBeModalComponent', () => {
  let component: WannaBeModalComponent;
  let fixture: ComponentFixture<WannaBeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WannaBeModalComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WannaBeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
