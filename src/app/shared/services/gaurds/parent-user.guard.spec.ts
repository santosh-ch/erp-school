import { TestBed } from '@angular/core/testing';

import { ParentUserGuard } from './parent-user.guard';

describe('ParentUserGuard', () => {
  let guard: ParentUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParentUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
