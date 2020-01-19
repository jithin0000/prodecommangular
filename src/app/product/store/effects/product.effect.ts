import { Inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductActionTypes } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { of } from 'rxjs';
import { ProductRequestDto } from 'src/app/models/dto/ProductRequestDto';
import {FilterProductRequest} from '../../../models/dto/FilterProductRequest';

@Injectable()
export class ProductEffect {

    constructor(private actions$: Actions, private service: ProductService) {}

    loadProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.LOAD_PRODUCTS),
        switchMap((body: {payload: PageRequestDto}) => this.service.getPaginatedProduct(body.payload)
        .pipe(
            map((res) => ({type: ProductActionTypes.LOAD_PRODUCTS_SUCCESS, payload: res})),
            catchError( error => of({type: ProductActionTypes.LOAD_PRODUCTS_FAILURE, payload: error}))
        ))

        )
    );

    deleteProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.DELETE_PRODUCTS),
        switchMap((body: {payload: number}) =>
        this.service.delete(body.payload).pipe(
            map(item => ({type: ProductActionTypes.DELETE_PRODUCTS_SUCCESS, payload: body.payload})),
            catchError(error => of({type: ProductActionTypes.DELETE_PRODUCTS_FAILURE, payload: error}))
        ))

        )
    );

    createProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.CREATE_PRODUCT),
        switchMap((body: {payload: ProductRequestDto}) =>
        this.service.createProduct(body.payload).pipe(
            map(item => ({type: ProductActionTypes.CREATE_PRODUCT_SUCCESS, payload: body.payload})),
            catchError(error => of({type: ProductActionTypes.CREATE_PRODUCT_FAILURE, payload: error}))
        ))

        )
    );

  filterProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActionTypes.FILTER_PRODUCT),
    switchMap((body: { payload: FilterProductRequest }) => this.service.filterProducts(body.payload)
      .pipe(
        map(product => ({type: ProductActionTypes.FILTER_PRODUCT_SUCCESS, payload: product})),
        catchError(error => of({type: ProductActionTypes.FILTER_PRODUCT_FAILURE, payload: error}))
      ))
  ));



}
