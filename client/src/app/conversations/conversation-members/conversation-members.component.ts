import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from 'src/app/shared/models/conversation';

@Component({
  selector: 'app-conversation-members',
  templateUrl: './conversation-members.component.html',
  styleUrls: ['./conversation-members.component.css']
})
export class ConversationMembersComponent implements OnInit {

  @Input() conversation: Conversation;

  constructor() { }

  ngOnInit(): void {
  }

}
