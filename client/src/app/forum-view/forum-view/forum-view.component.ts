import { Component, OnInit, Input } from '@angular/core';
import { forum } from 'src/app/shared/models/forum';
import { Router } from '@angular/router';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent implements OnInit {

  @Input() forum: forum;

  displayedColumns: string[] = ['creator', 'subject', 'publishdate'];

  constructor(private router : Router, public topicService: TopicsService) {
    this.forum = this.router.getCurrentNavigation().extras.state["data"];
    this.topicService.loadForum(this.forum.id);
   }

  ngOnInit(): void {
  }

}
