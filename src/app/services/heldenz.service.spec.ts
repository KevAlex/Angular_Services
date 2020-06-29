import { TestBed } from '@angular/core/testing';

import { HeldenzService } from './heldenz.service';

describe('HeldenzService', () => {
  let service: HeldenzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeldenzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
