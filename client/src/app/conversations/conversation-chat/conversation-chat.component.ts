import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { conversation } from 'src/app/shared/models/conversation';
import { ConversationService } from '../services/conversation.service';
import { conversationMessage } from 'src/app/shared/models/conversation-message';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-conversation-chat',
  templateUrl: './conversation-chat.component.html',
  styleUrls: ['./conversation-chat.component.css']
})
export class ConversationChatComponent implements OnInit {

  @Input() conversation: conversation;
  message: string = "";
  @ViewChild('messagesBox') private messagesBox: ElementRef;

  constructor(public conversationService: ConversationService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  isMyMessage(conversationMessage: conversationMessage) {
    return conversationMessage.creator.id == this.userService.loggedUser.id;
  }

  send() {
    this.conversationService.sendConversationMessage(this.conversation, this.message);
    this.message = "";
  }

  scrollToBottom(): void {
    try {
      this.messagesBox.nativeElement.scrollTop = this.messagesBox.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
