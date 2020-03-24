import { user } from './user';
import { conversation } from './conversation';

export class conversationMessage{
    id:number;
    creator:user;
    message:string;
    publishDate:Date;
    conversation:conversation;
}