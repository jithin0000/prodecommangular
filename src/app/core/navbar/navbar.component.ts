import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {CartModuleState} from '../../cart/store/CartModuleState';
import {createCart, getCart} from '../../cart/store/action';
import { cartSelector } from 'src/app/cart/store/selectors/cart.selector';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/dto/Cart';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cart$:Observable<Cart>

  constructor(
    private store: Store<CartModuleState>,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.cart$ = this.store.select(cartSelector)
    
    const cart = localStorage.getItem('cart')
    if (cart === null) {
      this.store.dispatch(createCart({payload: {}}))
    }else{
      this.store.dispatch(getCart())
    }

    this.cart$.subscribe(res => console.log(res))

    this.authService.isUserAuthenticated().subscribe(res => console.log(res))

    this.userService.getUser().subscribe(res =>console.log(res))


  }


  logout(){
    this.authService.logout()
    this.router.navigate(['/auth/'])
  }

}
