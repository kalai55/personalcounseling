import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageanalyzeComponent } from './imageanalyze.component';

describe('ImageanalyzeComponent', () => {
  let component: ImageanalyzeComponent;
  let fixture: ComponentFixture<ImageanalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageanalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageanalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
