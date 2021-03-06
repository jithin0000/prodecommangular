import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category/services/category/category.service';
import { Observable, Subject, fromEvent } from 'rxjs';
import { Category } from 'src/app/models/Category.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';

import { selectCategories, selectCategoryloading } from "../store/selectors/category.selector";
import { getCategory, filterCategoryByName, deleteCategory } from 'src/app/category/store/actions/category.action';
import { Page } from 'src/app/models/page.model';
import { PageEvent } from '@angular/material/paginator';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { map, debounceTime, tap, filter, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { CategoriesState } from '../store/CategoriesSate';
import { CatetegoryCommunicationService } from '../services/communication/catetegory-communication.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  paginatedCategory$: Observable<Page<Category>>
  categoryColumns = ["No", "Name", "Created", "Actions"]
  loading$: Observable<boolean>;

  searchTerm$ = new Subject<string>()

  constructor(
    
    private store: Store<CategoriesState>,
    private categoryEvent: CatetegoryCommunicationService
    ) {

      this.store.dispatch(filterCategoryByName({payload: this.searchTerm$}))
      
     }

  ngOnInit() {
    this.store.dispatch(getCategory({payload: {page:0, size:10, sort:"createAt"}}))

    this.paginatedCategory$ = this.store.select(state =>selectCategories(state) )
    this.loading$ = this.store.select(state => selectCategoryloading(state))

    this.store.select(state => state).subscribe(res => console.log(res))



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
    this.store.dispatch(deleteCategory({payload: id}))
  }

 
  ngOnDestroy(): void {
    this.searchTerm$.unsubscribe()
  }

  update(category){

    this.categoryEvent.sendCategory(category)

  }

  sort( temp: MatSelect){
    this.store.dispatch(getCategory({ payload: { sort: temp.value} }))
    
  }


}






















