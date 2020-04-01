import { Forum } from './forum';
import { User } from './user';

export class Topic {
    id:number;
    creator: User;
    forum: Forum;
    publishDate: Date;
    subject: string;
    body: string;
}