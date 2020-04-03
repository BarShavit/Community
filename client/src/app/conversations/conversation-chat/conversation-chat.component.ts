import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Conversation } from 'src/app/shared/models/conversation';
import { ConversationService } from '../services/conversation.service';
import { ConversationMessage } from 'src/app/shared/models/conversation-message';
import { UsersService } from 'src/app/shared/services/users.service';
import * as moment from 'moment';

@Component({
  selector: 'app-conversation-chat',
  templateUrl: './conversation-chat.component.html',
  styleUrls: ['./conversation-chat.component.css']
})
export class ConversationChatComponent implements OnInit {

  @Input() conversation: Conversation;
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

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Enter") {
        this.send();
    }
}

  isMyMessage(conversationMessage: ConversationMessage) {
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

  convertDateToString(date:Date) : string{
    return moment(date).format("D/M/YYYY H:mm:ss");
  }
}
