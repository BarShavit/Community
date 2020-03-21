import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { topic } from 'src/app/shared/models/topic';
import { SocketioService } from 'src/app/shared/services/socketio.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics = {};
  private topicsUpdatedNotify = new Subject();

  constructor(private http: HttpClient, private consts: ConstantsService,
    socketIO: SocketioService) {
    socketIO.consume(consts.newTopicKey).subscribe(this.newTopic.bind(this));
  }

  newTopic(topicJson: string) {
    let topic = JSON.parse(topicJson);
    if (this.topics[topic.forum.id] == null) {
      this.loadForum(topic.forum.id);
      return;
    }

    this.topics[topic.forum.id].push(topic);

    this.sort(topic.forum.id);

    this.topicsUpdatedNotify.next(this.topics[topic.forum.id]);
  }

  loadForum(forumId: number) {
    if (this.topics[forumId] == null) {
      this.http.get(this.consts.serverUrl + "topic/all/" + forumId).toPromise().then((data) => {
        this.topics[forumId] = data;
        this.sort(forumId);
        this.topicsUpdatedNotify.next(this.topics[forumId]);
      });
    }
  }

  private sort(forumId: number) {
    this.topics[forumId].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  new(topic: topic) {
    this.http.post(this.consts.serverUrl + "topic/", topic).toPromise().then(() => { });
  }

  updates() : Observable<any>{
    return this.topicsUpdatedNotify.asObservable();
  }
}
