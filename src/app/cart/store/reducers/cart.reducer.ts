import {Cart} from '../../../models/dto/Cart';
import {Action, createReducer, on} from '@ngrx/store';
import {createCart, createCartFailure, createCartSuccess, getCart, getCartSuccess, getCartFailure, addToCart, addToCartSuccess, addToCartFailure, addToUserCart, addToUserCartSuccess, addToUserCartFailure} from '../action';

export interface CartState {
  data: Cart;
  loading: boolean;
  loaded: boolean;
}

export const initialState = {
  data: null  , loading: false, loaded: false
};

// tslint:disable-next-line:variable-name
export const _cartReducer = createReducer(
  initialState,
  on(createCart, (state, action) => ({...state, loading: true, loaded: false})),
  on(createCartSuccess, (state, action) => {
    localStorage.setItem('cart', action.payload.id.toString());
    return {
      ...state,
      data: action.payload, loading: false, loaded: true
      
    };
  }),

  on(createCartFailure, (state, action) => ({...state, loaded: false, loading: false})),

  on(getCart, (state, action) => ({...state, loading: true, loaded: false})),
  on(getCartSuccess, (state, action) => {
    return {
      ...state,
      data: action.payload, loading: false, loaded: true
      
    };
  }),

  on(getCartFailure, (state, action) => ({...state, loaded: false, loading: false})),
  

  on(addToCart, (state, action) => ({...state, loading: true, loaded: false})),
  on(addToCartSuccess, (state, action) => {
    return {
      ...state,
      data: action.payload, loading: false, loaded: true
      
    };
  }),

  on(addToCartFailure, (state, action) => ({...state, loaded: false, loading: false})),

  on(addToUserCart, (state, action) => ({...state, loading: true, loaded: false})),
  on(addToUserCartSuccess, (state, action) => {
    return {
      ...state,
      data: action.payload, loading: false, loaded: true
      
    };
  }),

  on(addToUserCartFailure, (state, action) => ({...state, loaded: false, loading: false})),


);

export function cartReducer(state = initialState, action: Action) {
  return _cartReducer(state, action);

}
