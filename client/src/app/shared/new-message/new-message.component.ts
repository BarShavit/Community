import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Forum } from '../models/forum';
import { Topic } from '../models/topic';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/submenu/register/register.component';

export class createResult {
  subject: string;
  body: string;

  constructor(s: string, body: string) {
    this.subject = s;
    this.body = body;
  }
}

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  @Input() forum: Forum;
  @Input() topic: Topic;
  @Input() forumMode: boolean;
  @Output() create = new EventEmitter<createResult>();

  bodyError: boolean = false;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'subject': ['', [Validators.required]],
      'body': ['', [Validators.required]]
    }, {});
  }

  ngOnInit(): void {
  }

  done() {
    this.create.emit(new createResult(
      this.form.controls['subject'].value,
      this.form.controls['body'].value));
  }

  shouldShow(): boolean {
    return (this.forumMode && this.forum != null) || (!this.forumMode && this.topic != null);
  }

  bodyCheck() {
    if (this.form.controls['body'].value == "" ||
      this.form.controls['body'].value == null) {
      this.bodyError = true;
    } else{
      this.bodyError = false;
    }
  }
}