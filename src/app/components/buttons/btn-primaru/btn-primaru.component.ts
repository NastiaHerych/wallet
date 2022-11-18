import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddIncomeDialogComponent } from '../../dialogs/add-income-dialog/add-income-dialog.component';

@Component({
  selector: 'app-btn-primaru',
  templateUrl: './btn-primaru.component.html',
  styleUrls: ['./btn-primaru.component.scss'],
})
export class BtnPrimaruComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddIncomeDialogComponent, {
      width: '260px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
