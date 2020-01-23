import { Injectable } from '@angular/core';
import {BaseService} from '../base.service';
import {Cart} from '../../models/dto/Cart';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService<Cart>{

  constructor(http: HttpClient) {
    super(http, '/cart');
  }

  public addToCart(productId: number) {
    const cartId = localStorage.getItem('cart');

    return this.httpClient.get(this.url + `/add/${parseInt(cartId, 10)}/product/${productId}`);
  }

  public addUserToCart(body: { userId: number}) {
    const cartId = localStorage.getItem('cart');

    return this.httpClient.put(this.url + `/${parseInt(cartId, 10)}/user`, body);
  }

  public getSingleCart()
  {
    const cartId = localStorage.getItem('cart')
    const id = parseInt(cartId)

    return this.httpClient.get<Cart>(this.url+"/"+id)
  }
}
