import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  serverUrl: string = "http://localhost/";
  newTopicKey = "new-topic";
  newResponseKey = "new-response";
  newConversationMessageKey = "new-conversation-message";

  constructor() { }
}
