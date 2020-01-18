import { createAction, props } from '@ngrx/store';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { Page } from 'src/app/models/page.model';
import { Product } from 'src/app/models/Product.model';

export enum ProductActionTypes{
    LOAD_PRODUCTS = '[Product] LOAD_PRODUCTS' , 
    LOAD_PRODUCTS_SUCCESS = '[Product] LOAD_PRODUCTS_SUCCESS' ,
    LOAD_PRODUCTS_FAILURE = '[Product] LOAD_PRODUCTS_FAILURE',


    DELETE_PRODUCTS = '[Product] DELETE_PRODUCTS' , 
    DELETE_PRODUCTS_SUCCESS = '[Product] DELETE_PRODUCTS_SUCCESS' ,
    DELETE_PRODUCTS_FAILURE = '[Product] DELETE_PRODUCTS_FAILURE'

    
}


export const loadPorducts = createAction(
    ProductActionTypes.LOAD_PRODUCTS,
    props<{ payload: PageRequestDto }>()
)

export const loadPorductsSuccessfully = createAction(
    ProductActionTypes.LOAD_PRODUCTS_SUCCESS,
    props<{ payload: Page<Product> }>()
)

export const loadPorductsFailed = createAction(
    ProductActionTypes.LOAD_PRODUCTS_FAILURE,
    props<{ payload: any }>()
)

export const deleteProduct = createAction(
    ProductActionTypes.DELETE_PRODUCTS,
    props<{payload: number}>()
)

export const deleteProductSuccess = createAction(
    ProductActionTypes.DELETE_PRODUCTS_SUCCESS,
    props<{payload: number}>()
)

export const deleteProductFailure = createAction(
    ProductActionTypes.DELETE_PRODUCTS_FAILURE,
    props<{payload: any}>()
)