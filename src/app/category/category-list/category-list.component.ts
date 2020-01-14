import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Observable, Subject, fromEvent } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/AppState';

import { selectCategories, selectCategoryloading } from "../../redux/selector/category.selector";
import { getCategory, filterCategoryByName } from 'src/app/redux/actions/category.action';
import { Page } from 'src/app/models/page.model';
import { PageEvent } from '@angular/material/paginator';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { map, debounceTime, tap, filter, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  paginatedCategory$: Observable<Page<Category[]>>
  categoryColumns = ["No", "Name", "Created", "Actions"]
  loading$: Observable<boolean>;

  searchTerm$ = new Subject<string>()


  constructor(
    
    private store: Store<AppState>,
    private categoryservice: CategoryService
    ) {

      this.store.dispatch(filterCategoryByName({payload: this.searchTerm$}))
      
     }

  ngOnInit() {


    this.store.dispatch(getCategory({payload: {page:0, size:10, sort:"createAt"}}))


    
    this.paginatedCategory$ = this.store.select(state => selectCategories(state))
    
    this.loading$ = this.store.select(state => selectCategoryloading(state))
    

    this.searchTerm$.subscribe(res => console.log(res))

  }


  changePage(pageEvent: PageEvent){

    let body: PageRequestDto = {
      page: pageEvent.pageIndex,
      size: pageEvent.pageSize,
      sort: "createAt"
    }

    this.store.dispatch(getCategory({ payload: body }))
  }


  delete(id: number){

  }

 
  ngOnDestroy(): void {
    this.searchTerm$.unsubscribe()
  }

  update(id: number){

    console.log(id)
  }


}






















