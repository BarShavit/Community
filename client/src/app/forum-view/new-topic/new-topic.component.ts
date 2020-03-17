import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forum } from 'src/app/shared/models/forum';
import { topic } from 'src/app/shared/models/topic';
import { UsersService } from 'src/app/shared/services/users.service';
import { TopicsService } from '../services/topics.service';
import { createResult } from 'src/app/shared/new-message/new-message.component';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  forum: forum;

  constructor(private router: Router, private userService: UsersService,
    private topicService: TopicsService) {
    this.forum = this.router.getCurrentNavigation().extras.state["data"];
  }

  ngOnInit(): void {
  }

  create(result: createResult) {
    let newTopic = new topic();
    newTopic.subject = result.subject;
    newTopic.body = result.body;
    newTopic.creator = this.userService.loggedUser;
    newTopic.forum = this.forum;
    newTopic.publishDate = new Date();

    this.topicService.new(newTopic);

    this.router.navigate(['/forum'], {state: {data:this.forum}});
  }
}
