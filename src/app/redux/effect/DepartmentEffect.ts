import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, Subject } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { DepartmentService } from 'src/app/services/department/department.service';
import { DepartmentActionTypes } from '../actions/department.action';

 
@Injectable()
export class DepartmentEffects {
    
    constructor(private actions$: Actions, private departmentService: DepartmentService){}
 
  loadDepartments$ = createEffect(() => this.actions$.pipe(
    ofType(DepartmentActionTypes.LOAD_DEPARTMENT),
    switchMap((body: { payload: PageRequestDto}) => this.departmentService
    .getPaginatedDepartment(body.payload)
      .pipe(
        map(departments => ({  type: DepartmentActionTypes.LOAD_DEPARTMENT_SUCCESS, payload: departments })),
        catchError((error) => of({ type: DepartmentActionTypes.LOAD_DEPARTMENT_FAILURE, payload: error}))
      ))
    )
  );

  filterDepartmentByName$ = createEffect(() => this.actions$.pipe(
    ofType(DepartmentActionTypes.FILTER_DEPARTMENT_BY_NAME),
    switchMap((body: { payload: Subject<string>}) => {
      return this.departmentService
    .filterDepartmentByName(body.payload)
      .pipe(
        map(departments => ({  type: DepartmentActionTypes.FILTER_DEPARTMENT_BY_NAME_SUCCESS, payload: departments })),
        catchError((error) => of({ type: DepartmentActionTypes.FILTER_DEPARTMENT_BY_NAME_FAILURE, payload: error}))
      )})
    )
  );


  deleteDepartment$  = createEffect(() => this.actions$.pipe(
    ofType(DepartmentActionTypes.DELETE_DEPARTMENT),
    switchMap( (body:{payload: number}) => this.departmentService.delete(body.payload).pipe(
      map(data => ({type: DepartmentActionTypes.DELETE_DEPARTMENT_SUCCESS, payload: body.payload})),
      catchError(error => of({ type: DepartmentActionTypes.DELETE_DEPARTMENT_FAILURE, payload: error}))
    ) )
  )
  );




}