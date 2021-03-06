import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin.routing.module';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';



@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    SharedModule,
    MaterialModule,
    AdminRoutingModule,
    CategoryModule,
    ProductModule
  ]
})
export class AdminModule { }
