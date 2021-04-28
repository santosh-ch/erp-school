import { TestBed } from '@angular/core/testing';

import { StaffUserGuard } from './staff-user.guard';

describe('StaffUserGuard', () => {
  let guard: StaffUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaffUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
