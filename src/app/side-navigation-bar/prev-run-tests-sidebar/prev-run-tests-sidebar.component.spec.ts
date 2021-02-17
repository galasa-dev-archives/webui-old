import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevRunTestsSidebarComponent } from './prev-run-tests-sidebar.component';

describe('PrevRunTestsSidebarComponent', () => {
  let component: PrevRunTestsSidebarComponent;
  let fixture: ComponentFixture<PrevRunTestsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevRunTestsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevRunTestsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
