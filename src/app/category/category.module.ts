import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    SharedModule
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }
