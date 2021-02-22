import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalasaHamburgerComponent } from './galasa-hamburger.component';

describe('GalasaHamburgerComponent', () => {
  let component: GalasaHamburgerComponent;
  let fixture: ComponentFixture<GalasaHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalasaHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalasaHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
