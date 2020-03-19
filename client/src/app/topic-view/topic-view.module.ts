import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NewResponseComponent } from './new-response/new-response.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TopicViewComponent, NewResponseComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    TopicViewComponent,
    NewResponseComponent
  ]
})
export class TopicViewModule { }
