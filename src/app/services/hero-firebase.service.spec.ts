import { TestBed } from '@angular/core/testing';

import { HeroFirebaseService } from './hero-firebase.service';

describe('HeroFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroFirebaseService = TestBed.get(HeroFirebaseService);
    expect(service).toBeTruthy();
  });
});
