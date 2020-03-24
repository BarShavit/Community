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

  getAllConversation(): Promise<conversation[]> {
    if(!this.userService.connected){
      return null;
    }
    
    return this.http.get<conversation[]>(
      this.consts.serverUrl + "/conversation/" + this.userService.loggedUser.id).toPromise();
  }
}
