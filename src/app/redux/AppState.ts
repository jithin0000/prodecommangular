import { CategoryState } from '../category/store/reducers/category.reducer';
import { DepartmentState } from './reducers/department.reducer';

export interface AppState{
    readonly category: CategoryState,
    readonly department: DepartmentState
}