import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Transaction } from 'src/app/models/Transaction';
import { AuthService } from 'src/app/shared/auth.service';
import { TransactionService } from 'src/app/shared/transaction.service';
import { UpdateTransactionDialogComponent } from '../../dialogs/update-transaction-dialog/update-transaction-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  transactionList: Transaction[] = [];

  user$ = this.authService.currentUser$;
  userId = '';

  constructor(
    public authService: AuthService,
    private transactionService: TransactionService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.userId = user!.uid;
      this.getByField();
    });
  }

  getByField() {
    this.transactionService.getByField('userId', this.userId).subscribe(
      (res: any[]) => {
        this.transactionList = res;
      },
      (err: any) => {
        alert('Error while fetching student data');
      }
    );
  }

  deleteTransaction(transaction: Transaction) {
    if (window.confirm('Are you sure you want to delete ?')) {
      if (transaction.id !== undefined) {
        this.transactionService.delete(transaction.id);
      }
    }
  }

  openDialogToUpdate(transaction: Transaction): void {
    const dialogRef = this.dialog.open(UpdateTransactionDialogComponent, {
      width: '260px',
      data: {
        category: transaction.category,
        value: transaction.value,
        type: transaction.type,
        userId : transaction.userId,
        id : transaction.id
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
