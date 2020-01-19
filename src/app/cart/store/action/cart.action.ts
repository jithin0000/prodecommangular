import { createAction, props } from '@ngrx/store';
import { CategoryRequestDto } from '../../../models/dto/CategoryRequestDto';
import { Category } from '../../../models/Category.model';
import { CategoryActionTypes } from '../../../category/store/actions';
import { Cart } from '../../../models/dto/Cart';

export enum CartActionTypes {
  CREATE_CART = '[CART] Create Cart',
  CREATE_CART_FAILURE = '[CART] Create Cart Failure',
  CREATE_CART_SUCCESS = '[CART] Create Cart Success',

  GET_CART = '[CART] GET Cart',
  GET_CART_FAILURE = '[CART] GET Cart Failure',
  GET_CART_SUCCESS = '[CART] GET Cart Success',

  ADD_TO_CART = '[CART] ADD_TO Cart',
  ADD_TO_CART_FAILURE = '[CART] ADD_TO Cart Failure',
  ADD_TO_CART_SUCCESS = '[CART] ADD_TO Cart Success',
}

export const createCart = createAction(
  CartActionTypes.CREATE_CART,
  props<{ payload?: Cart }>());
export const createCartSuccess = createAction(
  CartActionTypes.CREATE_CART_SUCCESS,
  props<{ payload: Cart }>());
export const createCartFailure = createAction(
  CartActionTypes.CREATE_CART_FAILURE,
  props<{ payload: any }>());

export const getCart = createAction(
  CartActionTypes.GET_CART);
export const getCartSuccess = createAction(
  CartActionTypes.GET_CART_SUCCESS,
  props<{ payload: Cart }>());
export const getCartFailure = createAction(
  CartActionTypes.GET_CART_FAILURE,
  props<{ payload: any }>());


export const addToCart = createAction(
  CartActionTypes.ADD_TO_CART , props<{payload: number}>());
export const addToCartSuccess = createAction(
  CartActionTypes.ADD_TO_CART_SUCCESS,
  props<{ payload: Cart }>());
export const addToCartFailure = createAction(
  CartActionTypes.ADD_TO_CART_FAILURE,
  props<{ payload: any }>());