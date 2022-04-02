import { TestBed } from '@angular/core/testing';

import { SaveBuildService } from './save-build.service';

describe('SaveBuildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveBuildService = TestBed.get(SaveBuildService);
    expect(service).toBeTruthy();
  });
});
