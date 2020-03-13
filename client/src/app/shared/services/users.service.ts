import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  connected: boolean = false;

  constructor(private http: HttpClient, private consts: ConstantsService) { }

  login(user: string, pass: string): Promise<boolean> {
    return this.http.put(this.consts.serverUrl + "users/" + user + "/" + pass, null)
      .toPromise().then(() => {
        this.connected = true;
        return true;
      }).catch(() => { return false; }).finally(() => {
        return false;
      });
  }

  register(user: user): Promise<boolean> {
    return this.http.post(this.consts.serverUrl + "users", user).toPromise().then(() => {
      this.connected = true;
      return true;
    }).catch(() => {
      return false
    });
  }
}
