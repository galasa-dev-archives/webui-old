import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistToolbarComponent } from './worklist-toolbar.component';

describe('WorklistToolbarComponent', () => {
  let component: WorklistToolbarComponent;
  let fixture: ComponentFixture<WorklistToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklistToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklistToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
