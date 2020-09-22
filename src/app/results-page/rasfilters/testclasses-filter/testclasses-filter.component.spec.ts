import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestclassesFilterComponent } from './testclasses-filter.component';

describe('TestclassesFilterComponent', () => {
  let component: TestclassesFilterComponent;
  let fixture: ComponentFixture<TestclassesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestclassesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestclassesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
