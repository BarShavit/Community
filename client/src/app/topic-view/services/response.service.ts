import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { Response } from 'src/app/shared/models/response';
import { SocketioService } from 'src/app/shared/services/socketio.service';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  responses = {};

  constructor(private http: HttpClient, private consts: ConstantsService,
    socketio: SocketioService) {
    socketio.consume(consts.newResponseKey).subscribe(this.newResponse.bind(this));
    socketio.consume(consts.deletedResponseKey).subscribe(this.deletedResponse.bind(this));
  }

  private newResponse(responseJson: string) {
    let response = JSON.parse(responseJson);

    if (this.responses[response.topic.id] == null) {
      this.loadTopic(response.topic.id);
      return;
    }

    this.responses[response.topic.id].push(response);
  }

  private deletedResponse(responseJson: string) {
    let response = JSON.parse(responseJson);

    if (this.responses[response.topic.id] == null) {
      return;
    }

    for (let i = 0; i < this.responses[response.topic.id].length; i++) {
      if (this.responses[response.topic.id][i].id == response.id) {
        this.responses[response.topic.id].splice(i, 1);
        return;
      }
    }
  }

  loadTopic(topicId: number) {
    if (this.responses[topicId] == null) {
      this.http.get(this.consts.serverUrl + "response/" + topicId).toPromise().then((data) => {
        this.responses[topicId] = data;
      });
    }
  }

  add(res: Response) {
    this.http.post(this.consts.serverUrl + "response/", res).toPromise().then(() => { });
  }

  async delete(response: Response): Promise<boolean> {
    return this.http.delete(this.consts.serverUrl + "response/" + response.id)
      .toPromise().then(() => { return true }).catch(() => { return false; });
  }
}
