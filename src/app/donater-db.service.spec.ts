import { TestBed, inject } from '@angular/core/testing';

import { DonaterDbService } from './donater-db.service';

describe('DonaterDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonaterDbService]
    });
  });

  it('should be created', inject([DonaterDbService], (service: DonaterDbService) => {
    expect(service).toBeTruthy();
  }));
});
