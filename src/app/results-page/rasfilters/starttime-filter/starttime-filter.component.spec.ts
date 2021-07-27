import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttimeFilterComponent } from './starttime-filter.component';

describe('StarttimeFilterComponent', () => {
  let component: StarttimeFilterComponent;
  let fixture: ComponentFixture<StarttimeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttimeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
