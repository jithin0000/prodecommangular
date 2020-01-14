import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/AppState';

import { selectCategories, selectCategoryloading } from "../../redux/selector/category.selector";
import { getCategory } from 'src/app/redux/actions/category.action';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Category[]>
  categoryColumns = ["No", "Name", "Created"]
  loading$: Observable<boolean>;
  constructor(
    private store: Store<AppState>,
    private categoryService: CategoryService) { }

  ngOnInit() {

    this.categories$ = this.categoryService.getAll()

    this.store.dispatch(getCategory())

    this.store.select(state => selectCategories(state))
    this.loading$ = this.store.select(state => selectCategoryloading(state))
  }

}












