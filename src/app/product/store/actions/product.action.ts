import { createAction, props } from '@ngrx/store';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { Page } from 'src/app/models/page.model';
import { Product } from 'src/app/models/Product.model';
import { ProductRequestDto } from 'src/app/models/dto/ProductRequestDto';
import {FilterProductRequest} from '../../../models/dto/FilterProductRequest';

export enum ProductActionTypes {
    LOAD_PRODUCTS = '[Product] LOAD_PRODUCTS' ,
    LOAD_PRODUCTS_SUCCESS = '[Product] LOAD_PRODUCTS_SUCCESS' ,
    LOAD_PRODUCTS_FAILURE = '[Product] LOAD_PRODUCTS_FAILURE',


    DELETE_PRODUCTS = '[Product] DELETE_PRODUCTS' ,
    DELETE_PRODUCTS_SUCCESS = '[Product] DELETE_PRODUCTS_SUCCESS' ,
    DELETE_PRODUCTS_FAILURE = '[Product] DELETE_PRODUCTS_FAILURE',

    CREATE_PRODUCT = '[Product] CREATE_PRODUCTS' ,
    CREATE_PRODUCT_SUCCESS = '[Product] CREATE_PRODUCTS_SUCCESS' ,
    CREATE_PRODUCT_FAILURE = '[Product] CREATE_PRODUCTS_FAILURE',

    FILTER_PRODUCT = '[Product] FILTER_PRODUCTS',
    FILTER_PRODUCT_SUCCESS = '[Product] FILTER_PRODUCTS_SUCCESS',
    FILTER_PRODUCT_FAILURE = '[Product] FILTER_PRODUCTS_FAILURE'



}


export const loadPorducts = createAction(
    ProductActionTypes.LOAD_PRODUCTS,
    props<{ payload: PageRequestDto }>()
);

export const loadPorductsSuccessfully = createAction(
    ProductActionTypes.LOAD_PRODUCTS_SUCCESS,
    props<{ payload: Page<Product> }>()
);

export const loadPorductsFailed = createAction(
    ProductActionTypes.LOAD_PRODUCTS_FAILURE,
    props<{ payload: any }>()
);

export const deleteProduct = createAction(
    ProductActionTypes.DELETE_PRODUCTS,
    props<{payload: number}>()
);

export const deleteProductSuccess = createAction(
    ProductActionTypes.DELETE_PRODUCTS_SUCCESS,
    props<{payload: number}>()
);

export const deleteProductFailure = createAction(
    ProductActionTypes.DELETE_PRODUCTS_FAILURE,
    props<{payload: any}>()
);

export const createProduct = createAction(
    ProductActionTypes.CREATE_PRODUCT,
    props<{payload: ProductRequestDto}>()
);

export const createProductSuccess = createAction(
    ProductActionTypes.CREATE_PRODUCT_SUCCESS,
    props<{payload: Product}>()
);

export const createProductFailure = createAction(
    ProductActionTypes.CREATE_PRODUCT_FAILURE,
    props<{payload: any}>()
);

export const filterProduct = createAction(
  ProductActionTypes.FILTER_PRODUCT, props<{payload: FilterProductRequest}>()
)

export const filterProductSuccess = createAction(
  ProductActionTypes.FILTER_PRODUCT_SUCCESS, props<{ payload: Page<Product>}>()
)

export const filterProductFailure = createAction(
  ProductActionTypes.FILTER_PRODUCT_FAILURE, props<{ payload: any}>()
)


