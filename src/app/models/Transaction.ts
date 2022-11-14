export interface Transaction {
  userId: string;
  category: string;
  type: TransactionType;
  value: string;
}

export enum TransactionType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}
