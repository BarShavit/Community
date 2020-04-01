import { User } from './user';
import { Conversation } from './conversation';

export class ConversationMessage{
    id:number;
    creator:User;
    message:string;
    publishDate:Date;
    conversation:Conversation;
}