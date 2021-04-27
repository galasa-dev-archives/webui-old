import { TestBed } from '@angular/core/testing';

import { WorklistService } from './worklist.service';

describe('WorklistService', () => {
  let service: WorklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
