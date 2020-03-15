import { topic } from './topic';
import { user } from './user';

export class response{
    topic:topic;
    creator:user;
    publishDate:Date;
    body:string;
}