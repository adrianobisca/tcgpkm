import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('starts with loading set to false', () => {
    service.loading$.subscribe((resp) => expect(resp).toEqual(false));
  });

  it('show changes loading to true', () => {
    service.show();
    service.loading$.subscribe((resp) => expect(resp).toEqual(true));
  });

  it('hide changes loading to false', () => {
    service.hide();
    service.loading$.subscribe((resp) => expect(resp).toEqual(false));
  });
});
