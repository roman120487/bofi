import { TestBed } from '@angular/core/testing';

import { UploadLogoBrendService } from './upload-logo-brend.service';

describe('UploadLogoBrendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadLogoBrendService = TestBed.get(UploadLogoBrendService);
    expect(service).toBeTruthy();
  });
});
