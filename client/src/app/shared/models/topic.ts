import { forum } from './forum';
import { user } from './user';

export class topic {
    id:number;
    creator: user;
    forum: forum;
    publishDate: Date;
    subject: string;
    body: string;
}