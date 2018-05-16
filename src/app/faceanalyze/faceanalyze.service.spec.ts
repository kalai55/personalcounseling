import { TestBed, inject } from '@angular/core/testing';

import { FaceanalyzeService } from './faceanalyze.service';

describe('FaceanalyzeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceanalyzeService]
    });
  });

  it('should be created', inject([FaceanalyzeService], (service: FaceanalyzeService) => {
    expect(service).toBeTruthy();
  }));
});
