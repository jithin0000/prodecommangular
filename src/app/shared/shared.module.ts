import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DradDropDirective } from './drag/drad-drop.directive';
import { FormFieldComponent } from './widget/form-field/form-field.component';



@NgModule({
  declarations: [DradDropDirective, FormFieldComponent],
  imports: [
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DradDropDirective,
    FormFieldComponent

  ]
})
export class SharedModule { }
