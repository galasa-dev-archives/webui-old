import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunlogLineComponent } from './runlog-line.component';

describe('RunlogLineComponent', () => {
  let component: RunlogLineComponent;
  let fixture: ComponentFixture<RunlogLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunlogLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunlogLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
