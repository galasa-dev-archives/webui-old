import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InverseTestResultComponent } from './inverse-test-result.component';

describe('InverseTestResultComponent', () => {
  let component: InverseTestResultComponent;
  let fixture: ComponentFixture<InverseTestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InverseTestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InverseTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
