import { Component, OnInit, Input } from '@angular/core';
import { conversation } from 'src/app/shared/models/conversation';

@Component({
  selector: 'app-conversation-chat',
  templateUrl: './conversation-chat.component.html',
  styleUrls: ['./conversation-chat.component.css']
})
export class ConversationChatComponent implements OnInit {

  @Input() conversation : conversation;

  constructor() { }

  ngOnInit(): void {
  }

}
