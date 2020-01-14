import {AppState} from '../AppState'
import { createSelector, createFeatureSelector } from '@ngrx/store'
import { CategoryState } from '../reducers/category.reducer'


export const selectCategoryFeature = createFeatureSelector<AppState, CategoryState>("category")

export const selectCategories = createSelector(
    selectCategoryFeature,
    (state: CategoryState) => state.data
)

export const selectCategoryloading = createSelector(
    selectCategoryFeature,
    (state: CategoryState)=> state.loading
)