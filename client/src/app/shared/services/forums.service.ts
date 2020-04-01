import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { forum } from 'src/app/shared/models/forum';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  forums = {};

  constructor(private http: HttpClient, private consts: ConstantsService) { }

  async getForum(id: number): Promise<forum> {
    if (this.forums[id] == null) {
      this.forums[id] = await this.getForumFromHttp(id);
    }

    return this.forums[id];
  }

  private async getForumFromHttp(id: number): Promise<forum> {
    return this.http.get<forum>(this.consts.serverUrl + "forum/" + id).toPromise().then((data) => { return data; })
  }

  async add(cat: category, forum: forum): Promise<boolean> {
    return this.http.post(this.consts.serverUrl + "forum/" + cat.id, forum).toPromise()
      .then(() => { return true; }).catch(() => { return false; });
  }
}
