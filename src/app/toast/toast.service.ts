import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../core/widget/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private matSnackBar: MatSnackBar) { }

  public showToast(data: any) {
    this.matSnackBar.openFromComponent(SnackbarComponent, {
      data: data,
      duration: 3000,
    });
  }
}
