import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { AuthService } from 'src/app/shared/auth.service';
import { TransactionService } from 'src/app/shared/transaction.service';

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
    private transactionService: TransactionService
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
        console.log(res);
      },
      (err: any) => {
        alert('Error while fetching student data');
      }
    );
  }
}
