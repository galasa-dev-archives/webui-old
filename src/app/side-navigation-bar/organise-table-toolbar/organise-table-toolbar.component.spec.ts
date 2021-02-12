import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiseTableToolbarComponent } from './organise-table-toolbar.component';

describe('OrganiseTableToolbarComponent', () => {
  let component: OrganiseTableToolbarComponent;
  let fixture: ComponentFixture<OrganiseTableToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiseTableToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiseTableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
