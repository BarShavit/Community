import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CategoriesViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    CategoriesViewComponent
  ]
})
export class CategoryPageModule { }
