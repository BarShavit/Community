import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { topic } from 'src/app/shared/models/topic';
import { createResult } from 'src/app/shared/new-message/new-message.component';
import { response } from 'src/app/shared/models/response';
import { ResponseService } from '../services/response.service';

@Component({
  selector: 'app-new-response',
  templateUrl: './new-response.component.html',
  styleUrls: ['./new-response.component.css']
})
export class NewResponseComponent implements OnInit {

  topic: topic;

  constructor(private router: Router, private userService: UsersService,
    private responseService: ResponseService) {
    this.topic = this.router.getCurrentNavigation().extras.state["data"];
  }

  ngOnInit(): void {
  }

  create(result: createResult) {
    let res = new response();
    res.body = result.body;
    res.publishDate = new Date();
    res.topic = this.topic;
    res.creator = this.userService.loggedUser;

    this.responseService.add(res);

    this.router.navigate(['/topic'], {state: {data:this.topic}});
  }
}
