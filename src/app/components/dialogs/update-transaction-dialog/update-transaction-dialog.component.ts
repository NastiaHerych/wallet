import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction, TransactionType } from 'src/app/models/Transaction';
import { AuthService } from 'src/app/shared/auth.service';
import { TransactionService } from 'src/app/shared/transaction.service';

@Component({
  selector: 'app-update-transaction-dialog',
  templateUrl: './update-transaction-dialog.component.html',
  styleUrls: ['./update-transaction-dialog.component.scss'],
})
export class UpdateTransactionDialogComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private transactionService: TransactionService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction
  ) {}

  transactionData = this.data;

  updatedObj = {
    category: this.transactionData.category,
    value: this.transactionData.value,
    userId: this.transactionData.userId,
    type: this.transactionData.type,
  };

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateTransaction() {
    this.updatedObj.category = this.transactionData.category;
    this.updatedObj.value = this.transactionData.value;

    if (this.transactionData.id !== undefined) {
      this.transactionService.update(this.transactionData.id, this.updatedObj);
      this.openSnackBar('updated successfully', 'ok');
    } else {
      this.openSnackBar('error', 'ok');
    }

    this.dialogRef.close();
  }
}
