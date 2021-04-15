import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogScrollerComponent } from './log-scroller.component';

describe('LogScrollerComponent', () => {
  let component: LogScrollerComponent;
  let fixture: ComponentFixture<LogScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
