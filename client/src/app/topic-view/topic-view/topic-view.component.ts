import { Component, OnInit } from '@angular/core';
import { topic } from 'src/app/shared/models/topic';
import { Router } from '@angular/router';
import { ResponseService } from '../services/response.service';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  topic : topic;

  constructor(private router : Router, public topicService: ResponseService) {
    this.topic = this.router.getCurrentNavigation().extras.state["data"];
    this.topicService.loadTopic(this.topic.id);
   }

  ngOnInit(): void {
  }


}
