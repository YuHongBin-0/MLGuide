import { TestBed } from '@angular/core/testing';

import { FavStorageService } from './fav-storage.service';

describe('FavStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavStorageService = TestBed.get(FavStorageService);
    expect(service).toBeTruthy();
  });
});
