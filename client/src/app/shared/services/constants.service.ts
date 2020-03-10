import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  serverUrl : string = "http://localhost/"

  constructor() { }
}
