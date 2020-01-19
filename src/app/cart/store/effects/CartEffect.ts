import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {CartService} from '../../../services/cart/cart.service';
import {CartActionTypes} from '../action';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {Cart} from '../../../models/dto/Cart';
import {of} from 'rxjs';

@Injectable()
export class CartEffect {

  constructor(private actions$: Actions, private cartService: CartService) {
  }

  createCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActionTypes.CREATE_CART),
    switchMap((body: {payload: Cart}) => this.cartService.create(body.payload).pipe(
      map(cart => ({type: CartActionTypes.CREATE_CART_SUCCESS, payload: cart})),
      catchError(error => of({type: CartActionTypes.CREATE_CART_FAILURE, payload: error}))
    ))
  )
  );

  getCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActionTypes.GET_CART),
    switchMap(() => this.cartService.getSingleCart().pipe(
      map(cart => ({type: CartActionTypes.GET_CART_SUCCESS, payload: cart})),
      catchError(error => of({type: CartActionTypes.GET_CART_FAILURE, payload: error}))
    ))
  )
  );

  addToCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActionTypes.ADD_TO_CART),
    switchMap((body:{payload: number}) => this.cartService.addToCart(body.payload).pipe(
      map(cart => ({type: CartActionTypes.ADD_TO_CART_SUCCESS, payload: cart})),
      catchError(error => of({type: CartActionTypes.ADD_TO_CART_FAILURE, payload: error}))
    ))
  )
  );

}
