import { TestBed } from '@angular/core/testing';

import { LoggedInUserGaurdService } from './logged-in-user-gaurd.service';

describe('LoggedInUserGaurdService', () => {
  let service: LoggedInUserGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInUserGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
