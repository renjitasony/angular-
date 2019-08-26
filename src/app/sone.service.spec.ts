import { TestBed } from '@angular/core/testing';

import { SoneService } from './sone.service';

describe('SoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoneService = TestBed.get(SoneService);
    expect(service).toBeTruthy();
  });
});
