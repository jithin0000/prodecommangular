import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModuleState } from '../store/CartModuleState';
import { cartSelector } from '../store/selectors';
import { getCart } from '../store/action';
import { Cart } from 'src/app/models/dto/Cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: Observable<Cart>
  displayedColumns = [ 'name', 'quantity','price']

  constructor(
    private store: Store<CartModuleState>
  ) { }

  ngOnInit() {


    this.store.dispatch(getCart())
    this.cart$ = this.store.select(cartSelector)

  }

}
