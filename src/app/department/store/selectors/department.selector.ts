import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DepartmentsState } from '../../DepartmentsState';
import { getRouterState } from 'src/app/store';

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

export const selectedDepartmentSelector = createSelector(
    departmentEntitySelector,
    getRouterState,
    (entities, route) => {
        return route.state && entities[route.state.params.id]
    }
)