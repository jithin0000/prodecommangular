import * as fromCategories from './category.reducer'
import { ActionReducerMap } from '@ngrx/store'
import { CategoriesState } from '../CategoriesSate'

import * as fromDepartmentReducer from  '../../../department/store'

export const reducers : ActionReducerMap<CategoriesState> = {
    categories: fromCategories.categorReducer
}

