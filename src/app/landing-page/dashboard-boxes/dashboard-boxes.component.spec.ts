import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBoxesComponent } from './dashboard-boxes.component';

describe('DashboardBoxesComponent', () => {
  let component: DashboardBoxesComponent;
  let fixture: ComponentFixture<DashboardBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
