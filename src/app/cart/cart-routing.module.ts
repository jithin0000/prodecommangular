import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from '../guard/auth-guard.service';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuardService]}
    ]
  },
  { path: '', redirectTo: '/cart', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
