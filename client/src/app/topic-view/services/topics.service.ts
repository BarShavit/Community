import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { topic } from 'src/app/shared/models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  topics = {};
  constructor(private http: HttpClient, private consts: ConstantsService) { }

  async getTopic(id: number): Promise<topic> {
    if(this.topics[id] == null){
      this.topics[id] = await this.getTopicFromHttp(id);
    }

    return this.topics[id];
  }

  private async getTopicFromHttp(id: number): Promise<topic> {
    return this.http.get<topic>(this.consts.serverUrl + "topic/" + id)
      .toPromise().then(data => { return data });
  }
}
