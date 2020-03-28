import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { conversation } from 'src/app/shared/models/conversation';
import { ConversationService } from '../services/conversation.service';
import { NewConversationComponent } from '../new-conversation/new-conversation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-conversations',
  templateUrl: './all-conversations.component.html',
  styleUrls: ['./all-conversations.component.css']
})
export class AllConversationsComponent implements OnInit {
  conversations: conversation[];
  selectedConversation: conversation;

  @Output() onSelect = new EventEmitter<conversation>()

  constructor(private conversationService: ConversationService,
    private dialog: MatDialog) { }

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

  select(conv: conversation) {
    this.selectedConversation = conv;

    this.onSelect.emit(this.selectedConversation);
  }

  create() {
    const dialogRef = this.dialog.open(NewConversationComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
