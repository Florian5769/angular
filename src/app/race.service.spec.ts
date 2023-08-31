import { TestBed } from '@angular/core/testing';

import { PonyService } from './pony.service';

describe('PonyService', () => {
  let service: PonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});