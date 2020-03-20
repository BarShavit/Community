import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { topic } from 'src/app/shared/models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics = {};

  constructor(private http : HttpClient, private consts : ConstantsService) { }

  loadForum(forumId:number) {
    if(this.topics[forumId] == null){
      this.http.get(this.consts.serverUrl + "topic/all/" + forumId).toPromise().then((data) =>{
        this.topics[forumId] = data;
        this.topics[forumId].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      });
    }
  }

  new(topic:topic){
    this.http.post(this.consts.serverUrl + "topic/", topic).toPromise().then(() =>{});
  }
}
