import * as fromCategories from './category.reducer'
import { ActionReducerMap } from '@ngrx/store'
import { CategoriesState } from '../CategoriesSate'

export const reducers : ActionReducerMap<CategoriesState> = {
    categories: fromCategories.categorReducer,
}

