import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { StoreModule } from '@ngrx/store';
import { categorReducer } from '../redux/reducers/category.reducer';



@NgModule({
  declarations: [CategoryComponent, CategoryListComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature("category", categorReducer)
  ],
  exports:[
    CategoryComponent,
    CategoryListComponent
  ]
})
export class CategoryModule { }
