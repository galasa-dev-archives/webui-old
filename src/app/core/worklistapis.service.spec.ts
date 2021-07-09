import { TestBed } from '@angular/core/testing';

import { WorklistapisService } from './worklistapis.service';

describe('WorklistapisService', () => {
  let service: WorklistapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorklistapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
