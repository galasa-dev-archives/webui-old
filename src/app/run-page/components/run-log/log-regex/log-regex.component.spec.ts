import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegexComponent } from './log-regex.component';

describe('LogRegexComponent', () => {
  let component: LogRegexComponent;
  let fixture: ComponentFixture<LogRegexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRegexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRegexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
