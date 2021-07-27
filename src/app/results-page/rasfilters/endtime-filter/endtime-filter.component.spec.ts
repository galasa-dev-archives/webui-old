/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2021.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndtimeFilterComponent } from './endtime-filter.component';

describe('EndtimeFilterComponent', () => {
  let component: EndtimeFilterComponent;
  let fixture: ComponentFixture<EndtimeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndtimeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndtimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
