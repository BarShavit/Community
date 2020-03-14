import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { forum } from 'src/app/shared/models/forum';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {

  constructor(public categoriesService : CategoriesService,
    private router : Router) { }

  ngOnInit(): void {
  }

  chooseForum(forum:forum){
    this.router.navigate(['/forum'], {state: {data:forum}});
  }
}