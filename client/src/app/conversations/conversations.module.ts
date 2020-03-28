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
import { ConversationMembersComponent } from './conversation-members/conversation-members.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [MainConversationsComponent, AllConversationsComponent, ConversationChatComponent, ConversationMembersComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MainConversationsComponent,
    AllConversationsComponent
  ]
})
export class ConversationsModule { }
