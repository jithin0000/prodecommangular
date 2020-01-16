import { NgModule } from '@angular/core';
import { SnackbarComponent } from './widget/snackbar/snackbar.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [SnackbarComponent],
  entryComponents: [SnackbarComponent],
  imports: [
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports:[SnackbarComponent]
})
export class CoreModule { }
