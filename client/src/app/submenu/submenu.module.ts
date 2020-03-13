import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuComponent } from './submenu/submenu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [SubmenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    SubmenuComponent
  ]
})
export class SubmenuModule { }
