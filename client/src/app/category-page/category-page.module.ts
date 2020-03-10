import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesViewComponent } from './categories-view/categories-view.component';

@NgModule({
  declarations: [CategoriesViewComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CategoriesViewComponent
  ]
})
export class CategoryPageModule { }
