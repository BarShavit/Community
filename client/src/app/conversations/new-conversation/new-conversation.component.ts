import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/submenu/register/register.component';
import { UsersService } from 'src/app/shared/services/users.service';
import { conversation } from 'src/app/shared/models/conversation';
import { ConversationService } from '../services/conversation.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-conversation',
  templateUrl: './new-conversation.component.html',
  styleUrls: ['./new-conversation.component.css']
})
export class NewConversationComponent implements OnInit {

  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  failedRegistered: boolean = true;

  constructor(fb: FormBuilder, public userService : UsersService,
    private conversationService : ConversationService,
    private dialogRef: MatDialogRef<NewConversationComponent>) { 
    this.form = fb.group({
      'subject': ['', [Validators.required]],
      'members': ['', [Validators.required]],
    }, {});
  }

  ngOnInit(): void {
  }

  create(){
    let newConversation = new conversation();
    newConversation.subject = this.form.controls['subject'].value;
    newConversation.participants = this.form.controls['members'].value;

    // We push our self - the user can't create a conversation
    // without him in participants
    newConversation.participants.push(this.userService.loggedUser);

    this.conversationService.newConversation(newConversation);

    this.dialogRef.close(true);
  }

  getUsersWithoutMyself(){
    let result = [];
    
    this.userService.allUsers.forEach(user =>{
      if(user.id != this.userService.loggedUser.id){
        result.push(user);
      }
    });

    return result;
  }
}