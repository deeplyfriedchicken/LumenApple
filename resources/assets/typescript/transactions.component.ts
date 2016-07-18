import {Component, OnInit} from '@angular/core';
import {Transaction} from './transaction';
import {TransactionDetailComponent} from './transaction-detail.component';
import {TransactionService} from './transaction.service';

@Component({
    selector: 'trans-app',
    directives: [TransactionDetailComponent],
    templateUrl: 'includes/transaction-item-list.html'
})
export class TransactionsComponent implements OnInit {
  title = "Transaction History";
  transactions: Transaction[];
  selectedTransaction: Transaction;

  constructor(private transactionService: TransactionService) {}

  getTransactions() {
    this.transactionService.getTransactions().then(transactions => this.transactions = transactions);
  }

  ngOnInit() {
    this.getTransactions();
  }

  onSelect(transaction: Transaction) {
    this.selectedTransaction = transaction;
  }

}
