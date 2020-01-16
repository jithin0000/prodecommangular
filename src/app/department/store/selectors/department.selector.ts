import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DepartmentsState } from '../../DepartmentsState';

export const selectDepartment =  createFeatureSelector<DepartmentsState>("departments")

export const departmentEntitySelector = createSelector(
    selectDepartment,
    (state: DepartmentsState) => state.departments.data.entities
)

export const loadingDepartment = createSelector(
    selectDepartment,
    (state: DepartmentsState) => state.departments.loading
)

export const departmentSelector = createSelector(
    selectDepartment,
    state => {
        let {data} = state.departments
        let { entities } = data

        data['entities'] = Object.keys(entities).map( id => entities[parseInt(id)])

        return data;
    }
)