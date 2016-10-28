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
  errorMessage: string;
  transactions: Transaction[];
  transaction: Transaction;
  selectedTransaction: Transaction;
  mode = 'Observable';

  constructor(private transactionService: TransactionService) {}

  getTransactions() {
    this.transactionService.getTransactions()
                      .subscribe(
                        transactions => this.transactions = transactions,
                        error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getTransactions();
  }
  addTransaction(id: number, payee: string) {
    if(!payee) { return; }
    this.transactionService.addTransaction(id, payee)
                              .subscribe(
                                transaction => this.transactions = transaction,
                                error => this.errorMessage = <any>error
                              );
  }
  onSelect(transaction: Transaction) {
    this.selectedTransaction = transaction;
  }


}
