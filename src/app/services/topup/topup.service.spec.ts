import { TestBed } from '@angular/core/testing';

import { TopUpService } from './topup.service';

describe('TopUpService', () => {
  let service: TopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
