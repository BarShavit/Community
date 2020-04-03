import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  serverUrl: string = "http://localhost/";
  newTopicKey = "new-topic";
  newResponseKey = "new-response";
  newConversationMessageKey = "new-conversation-message";
  newConversationKey = "new-conversation";
  newCategoryKey = "new-category";
  newForumKey = "new-forum";
  deletedCategoryKey = "deleted-category";
  deletedForumKey = "deleted-forum";
  deletedTopicKey = "deleted-topic";
  deletedResponseKey = "deleted-response";

  constructor() { }
}
