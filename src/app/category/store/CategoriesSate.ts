import { CategoryState } from './reducers/category.reducer';
import { DepartmentsState } from 'src/app/department/DepartmentsState';
import { DepartmentState } from 'src/app/department/store/reducer/department.reducer';

export interface CategoriesState{
    readonly categories: CategoryState
}