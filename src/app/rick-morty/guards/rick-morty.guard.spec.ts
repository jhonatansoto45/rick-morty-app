import { TestBed } from '@angular/core/testing';

import { RickMortyGuard } from './rick-morty.guard';

describe('RickMortyGuard', () => {
  let guard: RickMortyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RickMortyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
