import { Component, OnInit } from '@angular/core';
import { forum } from 'src/app/shared/models/forum';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicsService } from '../services/topics.service';
import { topic } from 'src/app/shared/models/topic';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent implements OnInit {

  forum: forum;
  displayedColumns: string[] = ['creator', 'subject', 'publishdate'];

  constructor(private router: Router, private route: ActivatedRoute, public topicService: TopicsService,
    private forumService: ForumsService) {
  }

  async ngOnInit() {
    this.forum = await this.forumService.getForum(+this.route.snapshot.paramMap.get("id"));
    this.topicService.loadForum(this.forum.id);
  }

  chooseTopic(topic: topic) {
    this.router.navigate(['/topic/', topic.id], { state: { data: topic } });
  }

  newTopic() {
    this.router.navigate(['/newtopic/', this.forum.id], { state: { data: this.forum } });
  }
}
