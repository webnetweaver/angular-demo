import { TestBed } from '@angular/core/testing';

import { AnotherService } from './another.service';

describe('AnotherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherService = TestBed.get(AnotherService);
    expect(service).toBeTruthy();
  });
});
