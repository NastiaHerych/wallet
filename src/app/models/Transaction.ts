export interface Transaction {
  userId: string;
  category: string;
  type: TransactionType;
  value: string;
  id?: string;
}

export enum TransactionType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}
