import { forum } from './forum';
import { user } from './user';

export class topic {
    creator: user;
    forum: forum;
    publishDate: Date;
    subject: string;
    body: string;
}