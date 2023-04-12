import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatApp2Component } from './chat-app2.component';

describe('ChatApp2Component', () => {
  let component: ChatApp2Component;
  let fixture: ComponentFixture<ChatApp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatApp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
