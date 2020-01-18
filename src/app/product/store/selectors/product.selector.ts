import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModuleState } from '../ProductModuleState';

export const selectProduct = createFeatureSelector<ProductModuleState>("products")

export const productSelector = createSelector(
    selectProduct,
    state => {
        let { data } = state.products
        let {  entities } = data

        data['entities'] = Object.keys(entities).map(item => entities[parseInt(item)])

        return data;
    }
)

export const loadingProductSelector = createSelector(
    selectProduct, 
    state => state.products.loading
)