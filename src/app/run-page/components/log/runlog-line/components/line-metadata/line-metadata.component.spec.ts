import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMetadataComponent } from './line-metadata.component';

describe('LineMetadataComponent', () => {
  let component: LineMetadataComponent;
  let fixture: ComponentFixture<LineMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
