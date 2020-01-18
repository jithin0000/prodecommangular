import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DradDropDirective } from './drag/drad-drop.directive';



@NgModule({
  declarations: [DradDropDirective],
  imports: [
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DradDropDirective

  ]
})
export class SharedModule { }
