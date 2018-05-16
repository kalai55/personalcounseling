import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceanalyzeComponent } from './faceanalyze.component';

describe('FaceanalyzeComponent', () => {
  let component: FaceanalyzeComponent;
  let fixture: ComponentFixture<FaceanalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceanalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceanalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
