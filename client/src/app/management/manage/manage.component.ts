import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Category } from 'src/app/shared/models/category';
import { NewForumComponent } from '../new-forum/new-forum.component';
import { Forum } from 'src/app/shared/models/forum';
import { ForumsService } from 'src/app/shared/services/forums.service';
import { WarnDialogComponent } from 'src/app/shared/warn-dialog/warn-dialog.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(public categoriesService: CategoriesService,
    private forumService: ForumsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createForum(cat: Category) {
    let config = new MatDialogConfig();
    config.data = cat;
    config.width = "300px";

    const dialogRef = this.dialog.open(NewForumComponent, config);

    dialogRef.afterClosed().toPromise().then(() => {
      console.log('The dialog was closed');
    });
  }

  createCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().toPromise().then(() => {
      console.log('The dialog was closed');
    });
  }

  deleteForum(forum: Forum, category: Category) {
    const dialogRef = this.dialog.open(WarnDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().toPromise().then(result => {
      if (result) {
        this.forumService.delete(category, forum);
      }
    });
  }

  deleteCategory(category: Category) {
    const dialogRef = this.dialog.open(WarnDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().toPromise().then(result => {
      if (result) {
        this.categoriesService.delete(category);
      }
    });
  }
}
