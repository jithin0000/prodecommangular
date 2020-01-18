import { Inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductActionTypes } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PageRequestDto } from 'src/app/models/dto/PageRequestDto';
import { of } from 'rxjs';

@Injectable()
export class ProductEffect{

    constructor(private actions$: Actions, private service: ProductService)
    {}

    loadProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.LOAD_PRODUCTS),
        switchMap((body:{payload: PageRequestDto})=> this.service.getPaginatedProduct(body.payload)
        .pipe(
            map((res) => ({type: ProductActionTypes.LOAD_PRODUCTS_SUCCESS, payload: res})),
            catchError( error => of({type: ProductActionTypes.LOAD_PRODUCTS_FAILURE, payload: error}))
        ))
        
        )
    );

    deleteProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.DELETE_PRODUCTS),
        switchMap((body: {payload: number})=> 
        this.service.delete(body.payload).pipe(
            map(item => ({type: ProductActionTypes.DELETE_PRODUCTS_SUCCESS, payload: body.payload})),
            catchError(error => of({type: ProductActionTypes.DELETE_PRODUCTS_FAILURE, payload: error}))
        ))
       
        )
    );

}