import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddDetailComponent } from './add-detail/add-detail.component';



@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductDetailComponent, AddDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
