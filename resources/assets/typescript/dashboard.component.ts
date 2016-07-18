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

  constructor(private router: Router, private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions().then(transactions => this.transactions = transactions.slice(0,1));
  }

  goToDetail(transaction: Transaction) {
    let link = ['/detail', transaction.id];
    this.router.navigate(link);
  }
}
