import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transaction } from './transaction';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'transaction-detail',
  templateUrl: 'includes/transaction-detail.component.html'
})
export class TransactionDetailComponent implements OnInit, OnDestroy {
  transaction: Transaction;
  sub: any;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.transactionService.getTransaction(id).then(transaction => this.transaction = transaction);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();

  }
  goBack() {
    window.history.back();
  }
}
