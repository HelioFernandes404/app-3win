// snackbar.service.ts
import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
export class SnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
