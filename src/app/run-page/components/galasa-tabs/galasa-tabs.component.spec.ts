import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalasaTabsComponent } from './galasa-tabs.component';

describe('GalasaTabsComponent', () => {
  let component: GalasaTabsComponent;
  let fixture: ComponentFixture<GalasaTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalasaTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalasaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
