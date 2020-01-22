import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProductRoutingModule } from './product.routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { StoreModule } from '@ngrx/store';
import { rootReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { productEffects } from './store/effects';
import { CategoryModule } from '../category/category.module';
import { ColorModule } from '../color/color.module';



@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductDetailComponent, AddProductComponent, ProductItemComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ProductRoutingModule,
    StoreModule.forFeature("products", rootReducers),
    EffectsModule.forFeature(productEffects),
    CategoryModule,
    ColorModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
