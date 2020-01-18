import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home.routing.module';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    MaterialModule,
    HomeRoutingModule,
    ProductModule
  ]
})
export class HomeModule { }
