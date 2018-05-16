import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcompoentComponent } from './chatcompoent.component';

describe('ChatcompoentComponent', () => {
  let component: ChatcompoentComponent;
  let fixture: ComponentFixture<ChatcompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatcompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatcompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
