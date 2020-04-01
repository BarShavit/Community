import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { Topic } from 'src/app/shared/models/topic';
import { createResult } from 'src/app/shared/new-message/new-message.component';
import { Response } from 'src/app/shared/models/response';
import { ResponseService } from '../services/response.service';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-new-response',
  templateUrl: './new-response.component.html',
  styleUrls: ['./new-response.component.css']
})
export class NewResponseComponent implements OnInit {

  topic: Topic;

  constructor(private router: Router, private userService: UsersService,
    private responseService: ResponseService, private topicService: TopicsService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.topic = await this.topicService.getTopic(+this.route.snapshot.paramMap.get("id"));
  }

  create(result: createResult) {
    let res = new Response();
    res.body = result.body;
    res.publishDate = new Date();
    res.topic = this.topic;
    res.creator = this.userService.loggedUser;

    this.responseService.add(res);

    this.router.navigate(['/topic/', this.topic.id], { state: { data: this.topic } });
  }
}
