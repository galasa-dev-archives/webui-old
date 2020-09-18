/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { TestBed } from '@angular/core/testing';

import { RasApisService } from './rasapis.service';

describe('RasapisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RasApisService = TestBed.get(RasApisService);
    expect(service).toBeTruthy();
  });
});
