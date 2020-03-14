import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ForumViewComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    ForumViewComponent
  ]
})
export class ForumViewModule { }
