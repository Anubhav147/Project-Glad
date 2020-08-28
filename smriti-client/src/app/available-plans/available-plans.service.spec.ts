import { TestBed } from '@angular/core/testing';

import { AvailablePlansService } from './available-plans.service';

describe('AvailablePlansService', () => {
  let service: AvailablePlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailablePlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
