import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  docData,
  DocumentReference,
  DocumentData,
  query,
  where,
} from '@angular/fire/firestore';
import { collectionData } from 'rxfire/firestore';
import { of } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<T> {
  abstract collectionName: string;

  constructor(public afs: Firestore) {}

  add(doc: DocumentData): Promise<DocumentReference<DocumentData>> {
    return addDoc(collection(this.afs, this.collectionName), { ...doc });
  }

  delete(id: string): Promise<void> {
    const docRef = doc(this.afs, this.collectionName, id);
    return deleteDoc(docRef);
  }

  getAll() {
    return collectionData(collection(this.afs, this.collectionName), {
      idField: 'id',
    });
  }

  get(id: string) {
    const docRef = doc(this.afs, this.collectionName + '/' + id);
    return docData(docRef, { idField: 'id' });
  }

  getByField(field: string, value: string) {
    const docsRef = query(
      collection(this.afs, this.collectionName),
      where(field, '==', value)
    );
    return collectionData(docsRef, { idField: 'id' });
  }

  update(id: string, obj: T) {
    const docRef = doc(this.afs, this.collectionName, id);
    const res: any = { ...obj };
    return updateDoc(docRef, res);
  }
}
