import { TestBed, inject } from '@angular/core/testing';

import { ImageanalyzeService } from './imageanalyze.service';

describe('ImageanalyzeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageanalyzeService]
    });
  });

  it('should be created', inject([ImageanalyzeService], (service: ImageanalyzeService) => {
    expect(service).toBeTruthy();
  }));
});
