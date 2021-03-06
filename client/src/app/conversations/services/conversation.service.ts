import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { Conversation } from 'src/app/shared/models/conversation';
import { ConversationMessage } from 'src/app/shared/models/conversation-message';
import { SocketioService } from 'src/app/shared/services/socketio.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  conversations = {}

  constructor(private userService: UsersService, private http: HttpClient,
    private consts: ConstantsService, socketIO: SocketioService) {
    socketIO.consume(consts.newConversationMessageKey).subscribe(
      this.newConversationMessage.bind(this));
  }

  async getAllConversation(): Promise<Conversation[]> {
    // We can ask for the logged user, before the service
    // loaded it from the storage - so if the user service
    // isn't ready - we check it every 200 ms.
    while (!this.userService.loggedUserReady) {
      await this.delay(200);
    }

    if (this.userService.loggedUser == null) {
      return null;
    }

    return this.http.get<Conversation[]>(
      this.consts.serverUrl + "conversation/" + this.userService.loggedUser.id).toPromise();
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async loadConversationMessages(conversationId: number) {
    if (this.conversations[conversationId] != null) {
      return this.conversations[conversationId];
    }

    return this.http.get<ConversationMessage[]>(this.consts.serverUrl + "conversation/messages/" + conversationId)
      .toPromise().then((data) => {
        this.conversations[conversationId] = data;
      });
  }

  newConversationMessage(messageJson: string) {
    let message = <ConversationMessage>JSON.parse(messageJson);

    if (this.conversations[message.conversation.id] == null) {
      return;
    }

    this.conversations[message.conversation.id].push(message);
  }

  sendConversationMessage(conversation: Conversation, message: string) {
    let newMessage = new ConversationMessage();
    newMessage.message = message;
    newMessage.conversation = conversation;
    newMessage.publishDate = new Date();
    newMessage.creator = this.userService.loggedUser;

    this.http.post(this.consts.serverUrl + "conversation/messages", newMessage).toPromise().then(() => { });
  }

  newConversation(conversation: Conversation) {
    this.http.post(this.consts.serverUrl + "conversation", conversation).toPromise().then(() => {});
  }
}
