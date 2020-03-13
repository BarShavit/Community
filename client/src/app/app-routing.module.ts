import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesViewComponent } from './category-page/categories-view/categories-view.component';


const routes: Routes = [
  { path: 'categories_view', component: CategoriesViewComponent },
  { path: '', redirectTo: '/categories_view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
