import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewMessageComponent } from './new-message/new-message.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EditorModule } from '@tinymce/tinymce-angular';
import { StorageModule } from '@ngx-pwa/local-storage';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewMessageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    EditorModule,
    MatButtonModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    })
  ],
  exports:[
    NewMessageComponent
  ]
})
export class SharedModule { }
