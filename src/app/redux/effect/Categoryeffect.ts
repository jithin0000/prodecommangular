import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryActionTypes } from '../actions/category.action';
 
@Injectable()
export class CategoryEffects {
    
    constructor(private actions$: Actions, private categoryService: CategoryService){}
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActionTypes.LOAD_CATEGORY),
    mergeMap(() => this.categoryService.getAll()
      .pipe(
        map(categories => ({  type: CategoryActionTypes.LOAD_CATEGORY_SUCCESS, payload: categories })),
        catchError((error) => of({ type: CategoryActionTypes.LOAD_CATEGORY_FAILURE, payload: error}))
      ))
    )
  );


}