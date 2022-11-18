import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOutcomeDialogComponent } from '../../dialogs/add-outcome-dialog/add-outcome-dialog.component';

@Component({
  selector: 'app-btn-secondary',
  templateUrl: './btn-secondary.component.html',
  styleUrls: ['./btn-secondary.component.scss'],
})
export class BtnSecondaryComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddOutcomeDialogComponent, {
      width: '260px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
