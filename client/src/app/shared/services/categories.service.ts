import { Injectable } from '@angular/core';
import { category } from 'src/app/shared/models/category';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: category[];

  constructor(private http: HttpClient, private constants: ConstantsService,
    socketIO: SocketioService) {
    http.get(constants.serverUrl + "category").toPromise().then(
      data => {
        this.categories = data as category[];
      });

      socketIO.consume(constants.newCategoryKey).subscribe(this.newCategoryUpdate.bind(this));
  }

  private newCategoryUpdate(categoryString: string) {
    let category = JSON.parse(categoryString);
    this.categories.push(category);
  }

  async add(category: category): Promise<boolean> {
    return this.http.post(this.constants.serverUrl + "category", category).toPromise().then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }
}
