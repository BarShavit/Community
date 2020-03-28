import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationMembersComponent } from './conversation-members.component';

describe('ConversationMembersComponent', () => {
  let component: ConversationMembersComponent;
  let fixture: ComponentFixture<ConversationMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
