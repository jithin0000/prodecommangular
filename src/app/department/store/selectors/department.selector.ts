import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DepartmentsState } from '../../DepartmentsState';

export const selectDepartment =  createFeatureSelector<DepartmentsState>("departments")

export const departmentSelector = createSelector(
    selectDepartment,
    (state: DepartmentsState) => state.departments.data
)

export const loadingDepartment = createSelector(
    selectDepartment,
    (state: DepartmentsState) => state.departments.loading
)