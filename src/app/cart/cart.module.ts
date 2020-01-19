import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import {CartRoutingModule} from './cart-routing.module';
import {StoreModule} from '@ngrx/store';
import {cartRootReducer} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {cartEffects} from './store/effects';



@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    MaterialModule,
    CartRoutingModule,
    StoreModule.forFeature('carts', cartRootReducer),
    EffectsModule.forFeature(cartEffects)
  ]
})
export class CartModule { }
