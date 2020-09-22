import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleFilterComponent } from './bundle-filter.component';

describe('BundleFilterComponent', () => {
  let component: BundleFilterComponent;
  let fixture: ComponentFixture<BundleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
