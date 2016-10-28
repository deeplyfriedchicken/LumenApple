import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transaction } from './transaction';
import {TransactionService } from './transaction.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'includes/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  transactions: Transaction[] = [];
  selectedTransaction: Transaction;
  errorMessage: string;
  mode = 'Observable';

  constructor(private router: Router, private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions()
        .subscribe(
          transactions => this.transactions = transactions,
          error => this.errorMessage = <any>error);
  }

  goToDetail(transaction: Transaction) {
    let link = ['/detail', transaction.id];
    this.router.navigate(link);
  }
  onSelect(transaction: Transaction) {
    this.selectedTransaction = transaction;
  }
}
