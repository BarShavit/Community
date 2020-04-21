import { Injectable } from '@angular/core';
import { category } from 'src/app/shared/models/category';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: category[];

  constructor(http: HttpClient, constants: ConstantsService) {
    http.get(constants.serverUrl + "category").toPromise().then(
      data => {
        this.categories = data as category[];
      });
  }
}
