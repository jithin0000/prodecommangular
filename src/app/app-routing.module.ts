import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category/category.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';


const routes: Routes = [
  { path: 'category',
   loadChildren: ()=> import('./category/category.module').then(cm => cm.CategoryModule)
  },
  {
    path: 'department',
    loadChildren: ()=> import('./department/department.module').then( dm=> dm.DepartmentModule)
  },
 {
   path:'', redirectTo: 'category', pathMatch:'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
