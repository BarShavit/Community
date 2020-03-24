import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainConversationsComponent } from './main-conversations/main-conversations.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AllConversationsComponent } from './all-conversations/all-conversations.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [MainConversationsComponent, AllConversationsComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    SharedModule,
    MatCardModule
  ]
})
export class ConversationsModule { }
