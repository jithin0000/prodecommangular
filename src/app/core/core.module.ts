import { NgModule } from '@angular/core';
import { SnackbarComponent } from './widget/snackbar/snackbar.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from '../app-routing.module';
import {CartModule} from '../cart/cart.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SnackbarComponent, NavbarComponent],
  entryComponents: [SnackbarComponent],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CartModule
  ],
  exports:[SnackbarComponent, NavbarComponent]
})
export class CoreModule { }
