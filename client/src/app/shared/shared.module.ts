import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '@ngx-pwa/local-storage';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    })
  ]
})
export class SharedModule { }
