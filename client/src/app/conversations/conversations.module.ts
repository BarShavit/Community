import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainConversationsComponent } from './main-conversations/main-conversations.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AllConversationsComponent } from './all-conversations/all-conversations.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [MainConversationsComponent, AllConversationsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    SharedModule,
    MatCardModule,
    MatDividerModule
  ],
  exports:[
    MainConversationsComponent,
    AllConversationsComponent
  ]
})
export class ConversationsModule { }
