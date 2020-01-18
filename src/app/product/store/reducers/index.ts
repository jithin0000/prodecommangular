import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { ProductState, productReducer } from './product.reducer';
import { ProductModuleState } from '../ProductModuleState';

export const rootReducers: ActionReducerMap<ProductModuleState> = {
    products: productReducer
}