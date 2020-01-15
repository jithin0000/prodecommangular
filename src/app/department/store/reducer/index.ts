import { ActionReducerMap } from '@ngrx/store';
import { DepartmentsState } from '../../DepartmentsState';

import * as fromReducer from './department.reducer'

export const reducers: ActionReducerMap<DepartmentsState> ={
    departments: fromReducer.departmentReducer
}