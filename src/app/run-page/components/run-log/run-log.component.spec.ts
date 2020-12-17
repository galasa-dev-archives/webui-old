import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunLogComponent } from './run-log.component';

describe('RunLogComponent', () => {
  let component: RunLogComponent;
  let fixture: ComponentFixture<RunLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
