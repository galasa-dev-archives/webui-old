import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBarServiceComponent } from './loading-bar-service.component';

describe('LoadingBarServiceComponent', () => {
  let component: LoadingBarServiceComponent;
  let fixture: ComponentFixture<LoadingBarServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingBarServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingBarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
