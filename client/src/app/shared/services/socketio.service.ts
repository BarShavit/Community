import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  constructor(private socket:Socket) {
  }

  consume<T>(key:string) : Observable<T>{
    return this.socket.fromEvent(key);
  }
}
