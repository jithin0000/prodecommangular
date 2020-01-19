import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartModuleState } from '../CartModuleState';


export const selectCartModule = createFeatureSelector<CartModuleState>("carts")

export const cartSelector = createSelector(
    selectCartModule,
    state => state.carts.data
)

export const cartLodingSelector = createSelector(
    selectCartModule,
    state => state.carts.loading
)