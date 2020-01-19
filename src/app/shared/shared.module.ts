import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DradDropDirective } from './drag/drad-drop.directive';
import { FormFieldComponent } from './widget/form-field/form-field.component';
import { ProductCardComponent } from './widget/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [DradDropDirective, FormFieldComponent, ProductCardComponent],
  imports: [
    MaterialModule

  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DradDropDirective,
    FormFieldComponent,
    ProductCardComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
