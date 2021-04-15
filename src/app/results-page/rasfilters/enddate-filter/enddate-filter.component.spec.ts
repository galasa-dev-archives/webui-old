import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnddateFilterComponent } from './enddate-filter.component';

describe('EnddateFilterComponent', () => {
  let component: EnddateFilterComponent;
  let fixture: ComponentFixture<EnddateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnddateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnddateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
