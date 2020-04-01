import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Forum } from 'src/app/shared/models/forum';
import { Topic } from 'src/app/shared/models/topic';
import { UsersService } from 'src/app/shared/services/users.service';
import { TopicsService } from '../services/topics.service';
import { createResult } from 'src/app/shared/new-message/new-message.component';
import { ForumsService } from '../../shared/services/forums.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  forum: Forum;

  constructor(private router: Router, private userService: UsersService,
    private topicService: TopicsService, private forumService: ForumsService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.forum = await this.forumService.getForum(+this.route.snapshot.paramMap.get("id"));
  }

  create(result: createResult) {
    let newTopic = new Topic();
    newTopic.subject = result.subject;
    newTopic.body = result.body;
    newTopic.creator = this.userService.loggedUser;
    newTopic.forum = this.forum;
    newTopic.publishDate = new Date();

    this.topicService.new(newTopic);

    this.router.navigate(['/forum/', this.forum.id], { state: { data: this.forum } });
  }
}
