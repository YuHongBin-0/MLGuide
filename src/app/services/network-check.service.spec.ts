import { TestBed } from '@angular/core/testing';

import { NetworkCheckService } from './network-check.service';

describe('NetworkCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkCheckService = TestBed.get(NetworkCheckService);
    expect(service).toBeTruthy();
  });
});
