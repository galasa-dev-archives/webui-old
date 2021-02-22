import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseContrastToggleComponent } from './increase-contrast-toggle.component';

describe('IncreaseContrastToggleComponent', () => {
  let component: IncreaseContrastToggleComponent;
  let fixture: ComponentFixture<IncreaseContrastToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseContrastToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseContrastToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
