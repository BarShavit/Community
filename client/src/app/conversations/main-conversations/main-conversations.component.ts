import { Component, OnInit } from '@angular/core';
import { conversation } from 'src/app/shared/models/conversation';

@Component({
  selector: 'app-main-conversations',
  templateUrl: './main-conversations.component.html',
  styleUrls: ['./main-conversations.component.css']
})
export class MainConversationsComponent implements OnInit {

  selectedConversation : conversation;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(conversation:conversation){
    this.selectedConversation = conversation;
  }
}
