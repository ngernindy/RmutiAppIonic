import { TestBed } from '@angular/core/testing';

import { CDService } from './cd.service';

describe('CDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CDService = TestBed.get(CDService);
    expect(service).toBeTruthy();
  });
});
