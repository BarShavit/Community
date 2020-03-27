import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainConversationsComponent } from './main-conversations/main-conversations.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AllConversationsComponent } from './all-conversations/all-conversations.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversationChatComponent } from './conversation-chat/conversation-chat.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainConversationsComponent, AllConversationsComponent, ConversationChatComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MainConversationsComponent,
    AllConversationsComponent
  ]
})
export class ConversationsModule { }
