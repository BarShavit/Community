import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesViewComponent } from './category-page/categories-view/categories-view.component';
import { ForumViewComponent } from './forum-view/forum-view/forum-view.component';
import { TopicViewComponent } from './topic-view/topic-view/topic-view.component';
import { NewTopicComponent } from './forum-view/new-topic/new-topic.component';
import { NewResponseComponent } from './topic-view/new-response/new-response.component';
import { MainConversationsComponent } from './conversations/main-conversations/main-conversations.component';
import { ManageComponent } from './management/manage/manage.component';


const routes: Routes = [
  { path: 'categories_view', component: CategoriesViewComponent },
  { path: 'forum/:id', component: ForumViewComponent },
  { path: 'newtopic/:id', component: NewTopicComponent },
  { path: 'topic/:id', component: TopicViewComponent },
  { path: 'newresponse/:id', component: NewResponseComponent },
  { path: 'conversations', component: MainConversationsComponent },
  { path: 'management', component: ManageComponent },
  { path: '', redirectTo: '/categories_view', pathMatch: 'full' },
  { path: '**', redirectTo: '/categories_view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
