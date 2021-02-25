import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeFilterComponent } from './date-time-filter.component';

describe('DateTimeFilterComponent', () => {
  let component: DateTimeFilterComponent;
  let fixture: ComponentFixture<DateTimeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
