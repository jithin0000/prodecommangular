import {AppState} from '../../../redux/AppState'
import { createSelector, createFeatureSelector } from '@ngrx/store'
import { CategoryState } from '../reducers/category.reducer'
import { CategoriesState } from '../CategoriesSate'


export const selectCategoryFeature = 
createFeatureSelector<CategoriesState>("categories")

export const selectCategories = createSelector(
    selectCategoryFeature,
    (state: CategoriesState) => state.categories.data
)


export const selectCategoryloading = createSelector(
    selectCategoryFeature,
    (state: CategoriesState)=> state.categories.loading
)