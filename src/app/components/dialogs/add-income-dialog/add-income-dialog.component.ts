import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction, TransactionType } from 'src/app/models/Transaction';
import { AuthService } from 'src/app/shared/auth.service';
import { TransactionService } from 'src/app/shared/transaction.service';

@Component({
  selector: 'app-add-income-dialog',
  templateUrl: './add-income-dialog.component.html',
  styleUrls: ['./add-income-dialog.component.scss'],
})
export class AddIncomeDialogComponent implements OnInit {
  transactionObj = {
    category: '',
    value: '',
    userId: '',
    type: TransactionType.INCOME,
  };
  user$ = this.authService.currentUser$;

  constructor(
    public authService: AuthService,
    private transactionService: TransactionService,
    public dialogRef: MatDialogRef<AddIncomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTransaction() {
    this.transactionService.add(this.transactionObj);
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.user$.subscribe((user) => (this.transactionObj.userId = user!.uid));
  }
}
