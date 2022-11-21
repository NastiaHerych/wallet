import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transaction } from 'src/app/models/Transaction';
import { AuthService } from 'src/app/shared/auth.service';
import { TransactionService } from 'src/app/shared/transaction.service';
import { DeleteConfirmationComponent } from '../../dialogs/delete-confirmation/delete-confirmation.component';
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
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.userId = user!.uid;
      this.getByField();
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
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
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data: {
        message: 'Do you want to delete?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        if (transaction.id !== undefined) {
          this.transactionService.delete(transaction.id);
          this.openSnackBar('deleted successfully', 'ok');
        }
      } else {
        this.openSnackBar('error while deleting', 'ok');
      }
    });
  }

  openDialogToUpdate(transaction: Transaction): void {
    const dialogRef = this.dialog.open(UpdateTransactionDialogComponent, {
      width: '260px',
      data: {
        category: transaction.category,
        value: transaction.value,
        type: transaction.type,
        userId: transaction.userId,
        id: transaction.id,
      },
    });
  }
}
