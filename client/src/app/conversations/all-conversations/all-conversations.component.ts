import { Component, OnInit } from '@angular/core';
import { conversation } from 'src/app/shared/models/conversation';
import { ConversationService } from '../services/conversation.service';

@Component({
  selector: 'app-all-conversations',
  templateUrl: './all-conversations.component.html',
  styleUrls: ['./all-conversations.component.css']
})
export class AllConversationsComponent implements OnInit {
  conversations: conversation[];

  constructor(private conversationService: ConversationService) { }

  ngOnInit() {
    let promise = this.conversationService.getAllConversation();
    // If the promise is null - we tried to get conversation without login first
    if (promise == null) {
      return;
    }

    promise.then(data => {
      this.conversations = data;
    });
  }

}
