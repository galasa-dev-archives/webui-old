import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOverviewComponent } from './run-overview.component';

describe('RunOverviewComponent', () => {
  let component: RunOverviewComponent;
  let fixture: ComponentFixture<RunOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
