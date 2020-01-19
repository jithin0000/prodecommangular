import {ActionReducerMap} from '@ngrx/store';
import {CartModuleState} from '../CartModuleState';
import {cartReducer} from './cart.reducer';

import * as fromCartReducer from './cart.reducer';

export const cartRootReducer: ActionReducerMap<CartModuleState> = {
  carts: fromCartReducer.cartReducer
};


