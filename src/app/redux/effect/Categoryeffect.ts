import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, Subject } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryActionTypes } from '../actions/category.action';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
 
@Injectable()
export class CategoryEffects {
    
    constructor(private actions$: Actions, private categoryService: CategoryService){}
 
  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActionTypes.LOAD_CATEGORY),
    switchMap((body: { payload: PageRequestDto}) => this.categoryService
    .getPaginatedCategory(body.payload)
      .pipe(
        map(categories => ({  type: CategoryActionTypes.LOAD_CATEGORY_SUCCESS, payload: categories })),
        catchError((error) => of({ type: CategoryActionTypes.LOAD_CATEGORY_FAILURE, payload: error}))
      ))
    )
  );

  filterCategoryByName$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActionTypes.FILTER_CATEGORY_BY_NAME),
    switchMap((body: { payload: Subject<string>}) => {
      
      console.log(body.payload)
      return this.categoryService
    .filterCategoryByName(body.payload)
      .pipe(
        map(categories => ({  type: CategoryActionTypes.FILTER_CATEGORY_BY_NAME_SUCCESS, payload: categories })),
        catchError((error) => of({ type: CategoryActionTypes.FILTER_CATEGORY_BY_NAME_FAILURE, payload: error}))
      )})
    )
  );


}