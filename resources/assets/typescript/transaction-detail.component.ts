import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Transaction } from './transaction';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'transaction-detail',
  templateUrl: 'includes/transaction-detail.component.html'
})
export class TransactionDetailComponent implements OnInit, OnDestroy {
  @Input() transaction: Transaction;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        // this.transactionService.getTransaction(id).subscribe(transaction => this.transaction = transaction);
      }
      else {
        this.navigated = false;
        this.transaction = new Transaction();
      }
    });
  }
save() {
  // this.transactionService.save(this.transaction).then(transaction => {
  //   this.transaction = transaction;
  //   this.goBack(transaction);
  // })
  // .catch(error => this.error = error);
}

  ngOnDestroy() {
    this.sub.unsubscribe();

  }
  goBack(savedTransaction: Transaction = null) {
    this.close.emit(savedTransaction);
    if (this.navigated) {
      window.history.back();
    }
  }
}
