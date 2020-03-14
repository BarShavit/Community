import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CategoriesViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    CategoriesViewComponent
  ]
})
export class CategoryPageModule { }
