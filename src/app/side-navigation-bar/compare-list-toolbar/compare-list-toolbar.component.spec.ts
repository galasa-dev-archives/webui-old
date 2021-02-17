import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareListToolbarComponent } from './compare-list-toolbar.component';

describe('CompareListToolbarComponent', () => {
  let component: CompareListToolbarComponent;
  let fixture: ComponentFixture<CompareListToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareListToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
