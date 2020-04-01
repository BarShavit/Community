import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/submenu/register/register.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/shared/models/category';
import { Forum } from 'src/app/shared/models/forum';
import { ForumsService } from 'src/app/shared/services/forums.service';

@Component({
  selector: 'app-new-forum',
  templateUrl: './new-forum.component.html',
  styleUrls: ['./new-forum.component.css']
})
export class NewForumComponent implements OnInit {

  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  failedRegistered: boolean = true;
  category: Category;

  constructor(fb: FormBuilder,
    private forumService: ForumsService,
    private dialogRef: MatDialogRef<NewForumComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.category = data;

    this.form = fb.group({
      'name': ['', [Validators.required]],
      'description': ['', [Validators.required]],
    }, {});
  }

  ngOnInit(): void {
  }

  async create() {
    let newForum = new Forum();
    newForum.name = this.form.controls['name'].value;
    newForum.description = this.form.controls['description'].value;

    let addResult = await this.forumService.add(this.category, newForum);
    if (addResult) {
      this.dialogRef.close(true);
    }

    this.failedRegistered = false;
  }
}
