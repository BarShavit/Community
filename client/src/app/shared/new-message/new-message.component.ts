import { Component, OnInit, Input, Output } from '@angular/core';
import { forum } from '../models/forum';
import { topic } from '../models/topic';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  @Input() forum: forum;
  @Input() topic: topic;
  @Input() forumMode: boolean;

  @Output() subject: string;
  @Output() body: string;

  constructor() { }

  ngOnInit(): void {
  }
}
