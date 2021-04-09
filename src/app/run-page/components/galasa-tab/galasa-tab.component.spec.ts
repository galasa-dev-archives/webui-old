import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalasaTabComponent } from './galasa-tab.component';

describe('GalasaTabComponent', () => {
  let component: GalasaTabComponent;
  let fixture: ComponentFixture<GalasaTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalasaTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalasaTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
