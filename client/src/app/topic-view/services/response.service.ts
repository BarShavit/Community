import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { response } from 'src/app/shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  responses = {};

  constructor(private http: HttpClient, private consts: ConstantsService) { }

  loadTopic(topicId: number) {
    if (this.responses[topicId] == null) {
      this.http.get(this.consts.serverUrl + "response/" + topicId).toPromise().then((data) => {
        this.responses[topicId] = data;
      });
    }
  }

  add(res: response) {
    this.http.post(this.consts.serverUrl + "response/", res).toPromise().then(() => { });
  }
}
