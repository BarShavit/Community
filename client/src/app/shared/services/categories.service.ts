import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[];

  constructor(private http: HttpClient, private constants: ConstantsService,
    socketIO: SocketioService) {
    http.get(constants.serverUrl + "category").toPromise().then(
      data => {
        this.categories = data as Category[];
      });

    socketIO.consume(constants.newCategoryKey).subscribe(this.newCategoryUpdate.bind(this));
    socketIO.consume(constants.newForumKey).subscribe(this.newForumUpdate.bind(this));

    socketIO.consume(constants.deletedCategoryKey).subscribe(this.deletedCategoryUpdate.bind(this));
    socketIO.consume(constants.deletedForumKey).subscribe(this.deletedForumUpdate.bind(this));
  }

  private newCategoryUpdate(categoryString: string) {
    let category = JSON.parse(categoryString);
    this.categories.push(category);
  }

  private newForumUpdate(categoryString: string) {
    let category = JSON.parse(categoryString);

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id == category.id) {
        this.categories[i] = category;
        return;
      }
    }

    this.categories.push(category);
  }

  private deletedCategoryUpdate(categoryString: string) {
    let categoryId = JSON.parse(categoryString);

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id == categoryId) {
        this.categories.splice(i, 1);
        return;
      }
    }
  }

  private deletedForumUpdate(categoryString: string) {
    let category = JSON.parse(categoryString);

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id == category.id) {
        this.categories[i] = category;
        return;
      }
    }
  }

  async add(category: Category): Promise<boolean> {
    return this.http.post(this.constants.serverUrl + "category", category).toPromise().then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }

  async delete(category: Category): Promise<boolean> {
    return this.http.delete(this.constants.serverUrl + "category/" + category.id).toPromise().then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }
}
