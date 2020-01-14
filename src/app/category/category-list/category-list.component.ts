import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Store } from '@ngrx/store';
import { CategoryState } from 'src/app/redux/reducers/category.reducer';
import { AppState } from 'src/app/redux/AppState';

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


    this.store.select(state => state.category).subscribe(res => console.log(res))
  }

}












