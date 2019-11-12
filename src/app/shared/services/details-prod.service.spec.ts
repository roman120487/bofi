import { TestBed } from '@angular/core/testing';

import { DetailsProdService } from './details-prod.service';

describe('DetailsProdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsProdService = TestBed.get(DetailsProdService);
    expect(service).toBeTruthy();
  });
});
