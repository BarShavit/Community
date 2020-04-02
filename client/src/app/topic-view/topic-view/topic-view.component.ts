import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/shared/models/topic';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseService } from '../services/response.service';
import { TopicsService } from '../services/topics.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnDialogComponent } from 'src/app/shared/warn-dialog/warn-dialog.component';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  topic: Topic;

  constructor(private route: ActivatedRoute, private router: Router,
    public responseService: ResponseService, private topicService: TopicsService,
    public userService: UsersService,
    private dialog: MatDialog) {
  }

  async ngOnInit() {
    this.topic = await this.topicService.getTopic(+this.route.snapshot.paramMap.get("id"));
    this.responseService.loadTopic(this.topic.id);
  }

  newResponse() {
    this.router.navigate(['/newresponse/', this.topic.id]);
  }

  ableToDeleteTopic() {
    return this.userService.loggedUser != null && (this.userService.loggedUser.isAdmin ||
      this.topic.creator.id == this.userService.loggedUser.id);
  }

  deleteTopic() {
    const dialogRef = this.dialog.open(WarnDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().toPromise().then(async result => {
      if (result) {
        let result = await this.topicService.delete(this.topic);

        if (result) {
          this.router.navigate(['/forum/', this.topic.forum.id]);
        }
      }
    });
  }
}