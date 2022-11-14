import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Transaction } from '../models/Transaction';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService extends CrudService<Transaction> {
  collectionName = '/Transactions';
  constructor(public override afs: Firestore) {
    super(afs);
  }
}
