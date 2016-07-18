import { Injectable } from '@angular/core';

import { Transaction } from './transaction';
import { TRANSACTIONS } from './mock-transactions';

@Injectable()
export class TransactionService {
  getTransactions() {
      return Promise.resolve(TRANSACTIONS);
  }
  getTransaction(id: number) {
    return this.getTransactions().then(transactions => transactions.find(transaction => transaction.id === id));
  }
}
