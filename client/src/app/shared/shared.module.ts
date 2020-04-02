import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewMessageComponent } from './new-message/new-message.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { StorageModule } from '@ngx-pwa/local-storage';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WarnDialogComponent } from './warn-dialog/warn-dialog.component';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [NewMessageComponent, WarnDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    EditorModule,
    MatButtonModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  exports:[
    NewMessageComponent
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class SharedModule { }
