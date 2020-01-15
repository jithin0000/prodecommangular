import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from './store/effects/DepartmentEffect';
import { StoreModule } from '@ngrx/store';
import { departmentReducer } from './store/reducer/department.reducer';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { MaterialModule } from '../material/material.module';

import { reducers } from './store/reducer'
import { effects } from './store';

@NgModule({
  declarations: [DepartmentComponent, DepartmentListComponent, DepartmentDetailComponent, AddDepartmentComponent],
  imports: [
    SharedModule,
    MaterialModule,
    StoreModule.forFeature("departments", reducers),
    EffectsModule.forFeature(effects),
    DepartmentRoutingModule
  ]

})
export class DepartmentModule { }
