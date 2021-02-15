import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFiltersToolbarComponent } from './test-filters-toolbar.component';

describe('TestFiltersToolbarComponent', () => {
  let component: TestFiltersToolbarComponent;
  let fixture: ComponentFixture<TestFiltersToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFiltersToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFiltersToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
