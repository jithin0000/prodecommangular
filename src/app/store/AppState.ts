import { CategoryState } from '../category/store/reducers/category.reducer';
import { DepartmentState } from '../department/store/reducer/department.reducer';

export interface AppState{
    readonly category: CategoryState,
    readonly department: DepartmentState
}