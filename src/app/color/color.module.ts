import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './color-home/color-home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ColorRoutingModule } from './color-routing.module';
import { StoreModule } from '@ngrx/store';
import { rootColoReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { colorEffects } from './store/effects';



@NgModule({
  declarations: [ColorHomeComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ColorRoutingModule,
    StoreModule.forFeature("colors", rootColoReducer),
    EffectsModule.forFeature(colorEffects)
  ]
})
export class ColorModule { }
