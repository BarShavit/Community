import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { Topic } from 'src/app/shared/models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  topics = {};
  constructor(private http: HttpClient, private consts: ConstantsService) { }

  async getTopic(id: number): Promise<Topic> {
    if (this.topics[id] == null) {
      this.topics[id] = await this.getTopicFromHttp(id);
    }

    return this.topics[id];
  }

  private async getTopicFromHttp(id: number): Promise<Topic> {
    return this.http.get<Topic>(this.consts.serverUrl + "topic/" + id)
      .toPromise().then(data => { return data });
  }

  async delete(topic: Topic): Promise<boolean> {
    return this.http.delete(this.consts.serverUrl + "topic/" + topic.id)
      .toPromise().then(() => { return true }).catch(() => { return false; });
  }
}
