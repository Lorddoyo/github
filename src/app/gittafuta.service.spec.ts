import { TestBed } from '@angular/core/testing';

import { GittafutaService } from './gittafuta.service';

describe('GittafutaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GittafutaService = TestBed.get(GittafutaService);
    expect(service).toBeTruthy();
  });
});
