import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/AppState';

import { selectCategories } from "../../redux/selector/category.selector";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Category[]>

  constructor(
    private store: Store<AppState>,
    private categoryService: CategoryService) { }

  ngOnInit() {

    this.categories$ = this.categoryService.getAll()


    this.store.select(state => selectCategories(state)).subscribe(res => console.log(res))
  }

}












