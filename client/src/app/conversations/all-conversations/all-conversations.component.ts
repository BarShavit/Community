import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Conversation } from 'src/app/shared/models/conversation';
import { ConversationService } from '../services/conversation.service';
import { NewConversationComponent } from '../new-conversation/new-conversation.component';
import { MatDialog } from '@angular/material/dialog';
import { SocketioService } from 'src/app/shared/services/socketio.service';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';
import { SortByPipe } from 'ngp-sort-pipe';

@Component({
  selector: 'app-all-conversations',
  templateUrl: './all-conversations.component.html',
  styleUrls: ['./all-conversations.component.css']
})
export class AllConversationsComponent implements OnInit, OnDestroy {
  conversations: Conversation[];
  selectedConversation: Conversation;
  @Output() onSelect = new EventEmitter<Conversation>();

  private newConversationSubscription: Subscription;

  constructor(private conversationService: ConversationService,
    private dialog: MatDialog, private socketIO: SocketioService,
    private consts: ConstantsService,
    private userService : UsersService) { }

  ngOnInit() {
    let promise = this.conversationService.getAllConversation();
    // If the promise is null - we tried to get conversation without login first
    if (promise == null) {
      return;
    }

    promise.then(data => {
      this.conversations = data;
    });

    this.newConversationSubscription =
      this.socketIO.consume(this.consts.newConversationKey)
        .subscribe(this.newConversationUpdate.bind(this));
  }

  ngOnDestroy(): void {
    this.newConversationSubscription.unsubscribe();
  }

  select(conv: Conversation) {
    this.selectedConversation = conv;

    this.onSelect.emit(this.selectedConversation);
  }

  create() {
    const dialogRef = this.dialog.open(NewConversationComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().toPromise().then(() => {
      console.log('The dialog was closed');
    });
  }

  private newConversationUpdate(conversationJson: string) {
    let conversation = <Conversation>JSON.parse(conversationJson);
    
    let includingMe = false;
    conversation.participants.forEach(user =>{
      if(user.id == this.userService.loggedUser.id){
        includingMe = true;
        return;
      }
    });

    if(!includingMe){
      return;
    }

    this.conversations.unshift(conversation);
  }
}
