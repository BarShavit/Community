import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { User } from '../models/user';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  storageConnectionStatusName: string = "connected";
  storageUserName: string = "user";
  connected: boolean = false;
  loggedUser: User;
  connectedReady = false;
  loggedUserReady = false;
  allUsers: User[] = [];

  constructor(private http: HttpClient, private consts: ConstantsService,
    private storage: StorageMap) {
    this.storage.get(this.storageConnectionStatusName).toPromise().then((data) => {
      if (data != null) {
        this.connected = JSON.parse(<string>data);
      } else {
        this.connected = false;
      }

      this.connectedReady = true;
    });

    this.storage.get(this.storageUserName).toPromise().then((data) => {
      if (data != null) {
        this.loggedUser = JSON.parse(<string>data);
      } else {
        this.loggedUser = null;
      }

      this.loggedUserReady = true;
    });

    this.http.get<User[]>(this.consts.serverUrl + "users").toPromise().then(data =>{
      this.allUsers = data;
    });
  }

  login(user: string, pass: string): Promise<boolean> {
    return this.http.put(this.consts.serverUrl + "users/" + user + "/" + pass, null)
      .toPromise().then(async () => {
        this.connected = true;
        this.storage.set(this.storageConnectionStatusName,
          JSON.stringify(true)).toPromise().then(() => { });

        this.loggedUser = await this.getCurrentUser(user);

        this.storage.set(this.storageUserName,
          JSON.stringify(this.loggedUser)).toPromise().then(() => { });

        return true;
      },
        () => { return false; }).finally(() => {
          return false;
        });
  }

  async register(user: User): Promise<boolean> {
    return this.http.post(this.consts.serverUrl + "users", user).toPromise().then(async () => {
      this.connected = true;
      this.storage.set(this.storageConnectionStatusName,
        JSON.stringify(true)).toPromise().then(() => { });

      this.loggedUser = await this.getCurrentUser(user.username);

      this.storage.set(this.storageUserName,
        JSON.stringify(this.loggedUser)).toPromise().then(() => { });
      return true;
    }, () => {
      return false;
    });
  }

  private async getCurrentUser(username: string): Promise<User> {
    return this.http.get<User>(this.consts.serverUrl + "users/" + username).toPromise().then(
      (data) => {
        return data;
      }
    );
  }

  disconnect() {
    this.connected = false;
    this.storage.set(this.storageConnectionStatusName,
      JSON.stringify(false)).toPromise().then(() => { });
    this.storage.set(this.storageUserName,
      JSON.stringify("")).toPromise().then(() => { });
  }
}
