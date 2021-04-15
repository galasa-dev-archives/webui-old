import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartdateFilterComponent } from './startdate-filter.component';

describe('StartdateFilterComponent', () => {
  let component: StartdateFilterComponent;
  let fixture: ComponentFixture<StartdateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartdateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartdateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
