import { NgModule } from '@angular/core';
import { SnackbarComponent } from './widget/snackbar/snackbar.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SnackbarComponent],
  entryComponents: [SnackbarComponent],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
  ],
  exports:[SnackbarComponent]
})
export class CoreModule { }
