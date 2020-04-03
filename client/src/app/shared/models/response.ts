import { Topic } from './topic';
import { User } from './user';

export class Response {
    id: number;
    topic: Topic;
    creator: User;
    publishDate: Date;
    body: string;
}