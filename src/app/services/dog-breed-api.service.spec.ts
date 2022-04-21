import { TestBed } from '@angular/core/testing';

import { DogBreedAPIService } from './dog-breed-api.service';

describe('DogBreedAPIService', () => {
  let service: DogBreedAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogBreedAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
