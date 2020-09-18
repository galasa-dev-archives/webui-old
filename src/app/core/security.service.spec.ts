/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { TestBed } from '@angular/core/testing';

import { SecurityService } from './security.service';

describe('Security.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityService = TestBed.get(SecurityService);
    expect(service).toBeTruthy();
  });
});
 