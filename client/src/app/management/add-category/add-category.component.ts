import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/submenu/register/register.component';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  failedRegistered: boolean = true;

  constructor(fb: FormBuilder,
    private categoriesService: CategoriesService,
    private dialogRef: MatDialogRef<AddCategoryComponent>) {
    this.form = fb.group({
      'name': ['', [Validators.required]]
    }, {});
  }

  ngOnInit(): void {
  }

  async create() {
    let newCategory = new category();
    newCategory.forums = [];
    newCategory.name = this.form.controls['name'].value;

    let addResult = await this.categoriesService.add(newCategory);
    if (addResult) {
      this.dialogRef.close(true);
    }

    this.failedRegistered = false;
  }
}
