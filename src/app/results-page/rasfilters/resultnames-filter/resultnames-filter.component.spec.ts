import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultnamesFilterComponent } from './resultnames-filter.component';

describe('ResultnamesFilterComponent', () => {
  let component: ResultnamesFilterComponent;
  let fixture: ComponentFixture<ResultnamesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultnamesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultnamesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
