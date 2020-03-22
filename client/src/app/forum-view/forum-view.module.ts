import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { getPaginatorIntl } from './hebrew-paginator';

@NgModule({
  declarations: [ForumViewComponent, NewTopicComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    ForumViewComponent,
    NewTopicComponent
  ],
  providers:[
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
  ]
})
export class ForumViewModule { }
