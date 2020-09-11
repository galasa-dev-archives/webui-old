import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestorsFilterComponent } from './requestors-filter.component';

describe('RequestorsFilterComponent', () => {
  let component: RequestorsFilterComponent;
  let fixture: ComponentFixture<RequestorsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestorsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
