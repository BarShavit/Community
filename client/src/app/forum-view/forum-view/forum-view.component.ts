import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { forum } from 'src/app/shared/models/forum';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicsService } from '../services/topics.service';
import { topic } from 'src/app/shared/models/topic';
import { ForumsService } from '../services/forums.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.css']
})
export class ForumViewComponent implements OnInit, OnDestroy {

  forum: forum;
  displayedColumns: string[] = ['creator', 'subject', 'publishdate'];
  private updateSubscription:Subscription;
  dataSource = new MatTableDataSource<topic>();

  constructor(private router: Router, private route: ActivatedRoute,
    public topicService: TopicsService,
    private forumService: ForumsService,
    public userService: UsersService,
    private changeDetectorRefs: ChangeDetectorRef) {
  }

  async ngOnInit() {
    this.forum = await this.forumService.getForum(+this.route.snapshot.paramMap.get("id"));

    this.updateSubscription = this.topicService.updates().subscribe((data) =>{
      this.dataSource.data = data;
    });

    this.topicService.loadForum(this.forum.id);
  }

  ngOnDestroy(){
    this.updateSubscription.unsubscribe();
  }

  chooseTopic(topic: topic) {
    this.router.navigate(['/topic/', topic.id], { state: { data: topic } });
  }

  newTopic() {
    this.router.navigate(['/newtopic/', this.forum.id], { state: { data: this.forum } });
  }

  trackById(index: number, item: topic) {
    return item.id;
  }
}
