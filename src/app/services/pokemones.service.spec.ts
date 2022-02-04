import { TestBed } from '@angular/core/testing';

import { PokemonesService } from './pokemones.service';

describe('PokemonesService', () => {
  let service: PokemonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
