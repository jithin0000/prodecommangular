import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModuleState } from '../ProductModuleState';
import {getRouterState} from '../../../store/reducers';

export const selectProduct = createFeatureSelector<ProductModuleState>('products');

export const productSelector = createSelector(
    selectProduct,
    state => {
        const { data } = state.products;
        const {  entities } = data;

        data.entities = Object.keys(entities).map(item => entities[parseInt(item)]);

        return data;
    }
);

export const loadingProductSelector = createSelector(
    selectProduct,
    state => state.products.loading
);

export const selectProductEntities = createSelector(selectProduct,
  state => state.products.data.entities)

export const productDetailSelector = createSelector(
  selectProductEntities,
  getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.id];
  }
)

