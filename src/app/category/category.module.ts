import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { StoreModule } from '@ngrx/store';
import { categorReducer } from '../redux/reducers/category.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from '../redux/effect/Categoryeffect';
import { MaterialModule } from '../material/material.module';
import { CategoryListItemComponent } from './category-list-item/category-list-item.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AppRoutingModule } from '../app-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [
    CategoryComponent,
     CategoryListComponent, 
     CategoryListItemComponent, AddCategoryComponent, CategoryDetailComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature("category", categorReducer),
    EffectsModule.forFeature([CategoryEffects]),
    MaterialModule,
    CategoryRoutingModule
  ],
  exports:[
  ]
})
export class CategoryModule { }
