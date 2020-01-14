import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListItemComponent } from './category-list-item/category-list-item.component';


const routes: Routes = [
  { path: '', children: [
      { path: '', component: CategoryComponent},
      { path: 'detail/:id', component: CategoryDetailComponent},
      { path: 'add', component: AddCategoryComponent},
      { path: 'item', component: CategoryListItemComponent},
  ]
},
{ path:'', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
