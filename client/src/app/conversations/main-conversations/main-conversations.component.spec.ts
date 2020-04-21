import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConversationsComponent } from './main-conversations.component';

describe('MainConversationsComponent', () => {
  let component: MainConversationsComponent;
  let fixture: ComponentFixture<MainConversationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConversationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
