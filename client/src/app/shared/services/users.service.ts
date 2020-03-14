import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { user } from '../models/user';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  storageConnectionStatusName: string = "connected"
  connected: boolean = false;

  constructor(private http: HttpClient, private consts: ConstantsService,
    private storage: StorageMap) {
    this.storage.get(this.storageConnectionStatusName).toPromise().then((data) => {
      if (data != null) {
        this.connected = JSON.parse(<string>data);
      } else {
        this.connected = false;
      }
    });
  }

  login(user: string, pass: string): Promise<boolean> {
    return this.http.put(this.consts.serverUrl + "users/" + user + "/" + pass, null)
      .toPromise().then(() => {
        this.connected = true;
        this.storage.set(this.storageConnectionStatusName,
          JSON.stringify(true)).toPromise().then(() => { });
        return true;
      },
      () => { return false; }).finally(() => {
        return false;
      });
  }

  async register(user: user): Promise<boolean> {
    return this.http.post(this.consts.serverUrl + "users", user).toPromise().then(() => {
      this.connected = true;
      this.storage.set(this.storageConnectionStatusName,
        JSON.stringify(true)).toPromise().then(() => { })
      return true;
    }, () =>{
      return false;
    });
  }

  disconnect(){
    this.connected = false;
    this.storage.set(this.storageConnectionStatusName,
      JSON.stringify(false)).toPromise().then(() => { })
  }
}
