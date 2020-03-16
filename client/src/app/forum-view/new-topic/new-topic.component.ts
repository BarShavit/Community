import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forum } from 'src/app/shared/models/forum';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  forum: forum;

  constructor(private router : Router) {
    this.forum = this.router.getCurrentNavigation().extras.state["data"];
   }

  ngOnInit(): void {
  }
}
