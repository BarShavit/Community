import { Topic } from './topic';
import { User } from './user';

export class Response{
    topic:Topic;
    creator:User;
    publishDate:Date;
    body:string;
}