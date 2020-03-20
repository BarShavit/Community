import { Component, OnInit } from '@angular/core';
import { topic } from 'src/app/shared/models/topic';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseService } from '../services/response.service';
import { TopicsService } from '../services/topics.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  topic: topic;

  constructor(private route: ActivatedRoute, private router: Router,
    public responseService: ResponseService, private topicService: TopicsService,
    public userService: UsersService) {
  }

  async ngOnInit() {
    this.topic = await this.topicService.getTopic(+this.route.snapshot.paramMap.get("id"));
    this.responseService.loadTopic(this.topic.id);
  }

  newResponse() {
    this.router.navigate(['/newresponse/', this.topic.id], { state: { data: this.topic } });
  }
}
