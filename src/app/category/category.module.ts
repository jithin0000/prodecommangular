import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { StoreModule } from '@ngrx/store';
import { categorReducer } from '../redux/reducers/category.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from '../redux/effect/Categoryeffect';



@NgModule({
  declarations: [CategoryComponent, CategoryListComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature("category", categorReducer),
    EffectsModule.forFeature([CategoryEffects])
  ],
  exports:[
    CategoryComponent,
    CategoryListComponent
  ]
})
export class CategoryModule { }
