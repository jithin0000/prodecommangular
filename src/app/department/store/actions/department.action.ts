import { createAction, Action, props } from "@ngrx/store";
import { Page } from 'src/app/models/page.model';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { Subject } from 'rxjs';
import { Department } from 'src/app/models/Department.model';

export enum DepartmentActionTypes {
    LOAD_DEPARTMENT = "[LOAD] departments",
    LOAD_DEPARTMENT_SUCCESS = "[LOAD] departments success",
    LOAD_DEPARTMENT_FAILURE = "[LOAD] departments failure",

    FILTER_DEPARTMENT_BY_NAME = "[FILTER]  filter departments",
    FILTER_DEPARTMENT_BY_NAME_SUCCESS = "[FILTER] filter departments success",
    FILTER_DEPARTMENT_BY_NAME_FAILURE = "[FILTER] filter departments failure",

    DELETE_DEPARTMENT = "[DELETE]  DELETE departments",
    DELETE_DEPARTMENT_SUCCESS = "[DELETE] DELETE departments success",
    DELETE_DEPARTMENT_FAILURE = "[DELETE] DELETE departments failure",

    CREATE_DEPARTMENT = "[CREATE]  CREATE departments",
    CREATE_DEPARTMENT_SUCCESS = "[CREATE] CREATE departments success",
    CREATE_DEPARTMENT_FAILURE = "[CREATE] CREATE departments failure",
}

export const getDepartment = createAction(
    DepartmentActionTypes.LOAD_DEPARTMENT,
    props<{ payload?: PageRequestDto }>()

)


export const getDepartmentSuccess = createAction(
    DepartmentActionTypes.LOAD_DEPARTMENT_SUCCESS,
    props<{ payload: Page<Department> }>()
)
export const getDepartmentFailure = createAction(DepartmentActionTypes.LOAD_DEPARTMENT_FAILURE)

export const filterDepartmentByName = createAction(
    DepartmentActionTypes.FILTER_DEPARTMENT_BY_NAME,
    props<{ payload: any }>()
)


export const filterDepartmentByNameSuccess = createAction(
    DepartmentActionTypes.FILTER_DEPARTMENT_BY_NAME_SUCCESS,
    props<{ payload: Page<Department> }>()
)
export const filterDepartmentByNameFailure = createAction(DepartmentActionTypes.FILTER_DEPARTMENT_BY_NAME_FAILURE,
    props<{ payload: any }>()
)

export const deleteDepartment = createAction(
    DepartmentActionTypes.DELETE_DEPARTMENT,
    props<{payload: number}>());
export const deleteDepartmentSuccess = createAction(
    DepartmentActionTypes.DELETE_DEPARTMENT_SUCCESS, 
    props<{payload: number}>());
export const deleteDepartmentFailure = createAction(DepartmentActionTypes.DELETE_DEPARTMENT_FAILURE, props<{payload:any}>());



export const createDepartment = createAction(
    DepartmentActionTypes.CREATE_DEPARTMENT,
    props<{payload: Department}>()
)

export const createDepartmentSuccess = createAction(
    DepartmentActionTypes.CREATE_DEPARTMENT_SUCCESS,
    props<{payload: Department}>()
)


export const createDepartmentFailure = createAction(
    DepartmentActionTypes.CREATE_DEPARTMENT_FAILURE,
    props<{payload: any}>()
)



















