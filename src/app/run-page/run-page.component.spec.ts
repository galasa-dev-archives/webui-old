import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPageComponent } from './run-page.component';

describe('RunPageComponent', () => {
  let component: RunPageComponent;
  let fixture: ComponentFixture<RunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
