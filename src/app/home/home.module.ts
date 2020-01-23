import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home.routing.module';
import { ProductModule } from '../product/product.module';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeProductDetailsComponent } from './home-product-details/home-product-details.component';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [HomeComponent, HomeListComponent, HomeProductDetailsComponent],
  imports: [
    SharedModule,
    MaterialModule,
    HomeRoutingModule,
    ProductModule,
    CartModule
  ]
})
export class HomeModule { }
