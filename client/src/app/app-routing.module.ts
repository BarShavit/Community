import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesViewComponent } from './category-page/categories-view/categories-view.component';
import { ForumViewComponent } from './forum-view/forum-view/forum-view.component';
import { TopicViewComponent } from './topic-view/topic-view/topic-view.component';


const routes: Routes = [
  { path: 'categories_view', component: CategoriesViewComponent },
  { path: 'forum', component: ForumViewComponent},
  { path: 'topic', component: TopicViewComponent},
  { path: '', redirectTo: '/categories_view', pathMatch: 'full' },
  { path: '**', redirectTo: '/categories_view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
