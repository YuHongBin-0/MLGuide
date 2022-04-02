import { TestBed } from '@angular/core/testing';

import { HomeTabService } from './home-tab.service';

describe('HomeTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeTabService = TestBed.get(HomeTabService);
    expect(service).toBeTruthy();
  });
});
