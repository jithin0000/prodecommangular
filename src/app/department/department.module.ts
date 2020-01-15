import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from '../redux/effect/DepartmentEffect';
import { StoreModule } from '@ngrx/store';
import { departmentReducer } from '../redux/reducers/department.reducer';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    StoreModule.forFeature("department", departmentReducer),
    EffectsModule.forFeature([DepartmentEffects])
  ]

})
export class DepartmentModule { }
