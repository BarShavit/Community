import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { Forum } from 'src/app/shared/models/forum';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  forums = {};

  constructor(private http: HttpClient, private consts: ConstantsService) { }

  async getForum(id: number): Promise<Forum> {
    if (this.forums[id] == null) {
      this.forums[id] = await this.getForumFromHttp(id);
    }

    return this.forums[id];
  }

  private async getForumFromHttp(id: number): Promise<Forum> {
    return this.http.get<Forum>(this.consts.serverUrl + "forum/" + id).toPromise().then((data) => { return data; })
  }

  async add(cat: Category, forum: Forum): Promise<boolean> {
    return this.http.post(this.consts.serverUrl + "forum/" + cat.id, forum).toPromise()
      .then(() => { return true; }).catch(() => { return false; });
  }

  async delete(cat: Category, forum: Forum): Promise<boolean> {
    return this.http.delete(this.consts.serverUrl + "forum/" + cat.id + "/" + forum.id).toPromise()
      .then(() => { return true; }).catch(() => { return false; });
  }
}
