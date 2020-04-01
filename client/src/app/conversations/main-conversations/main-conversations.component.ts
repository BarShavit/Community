import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/app/shared/models/conversation';
import { ConversationService } from '../services/conversation.service';

@Component({
  selector: 'app-main-conversations',
  templateUrl: './main-conversations.component.html',
  styleUrls: ['./main-conversations.component.css']
})
export class MainConversationsComponent implements OnInit {

  selectedConversation : Conversation;

  constructor(private conversationService:ConversationService) { }

  ngOnInit(): void {
  }

  async onSelect(conversation:Conversation){
    await this.conversationService.loadConversationMessages(conversation.id);
    this.selectedConversation = conversation;
  }
}
