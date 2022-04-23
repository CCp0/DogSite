import { TestBed } from '@angular/core/testing';

import { DogDatabaseService } from './dog-database.service';

describe('DogDatabaseService', () => {
  let service: DogDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
