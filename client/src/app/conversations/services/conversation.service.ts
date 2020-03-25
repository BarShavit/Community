import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { conversation } from 'src/app/shared/models/conversation';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private userService: UsersService, private http: HttpClient,
    private consts: ConstantsService) { }

  async getAllConversation(): Promise<conversation[]> {
    // We can ask for the logged user, before the service
    // loaded it from the storage - so if the user service
    // isn't ready - we check it every 200 ms.
    while(!this.userService.loggedUserReady){
      await this.delay(200);
    }

    if (this.userService.loggedUser == null) {
      return null;
    }

    return this.http.get<conversation[]>(
      this.consts.serverUrl + "conversation/" + this.userService.loggedUser.id).toPromise();
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
