import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './theme/header/header.component';
import { CategoryPageModule } from './category-page/category-page.module';
import { SubmenuModule } from './submenu/submenu.module';
import { ForumViewModule } from './forum-view/forum-view.module';
import { TopicViewModule } from './topic-view/topic-view.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    MatToolbarModule,
    CategoryPageModule,
    SubmenuModule,
    ForumViewModule,
    TopicViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
