"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const transaction_detail_component_1 = require('./transaction-detail.component');
const transaction_service_1 = require('./transaction.service');
let TransactionsComponent = class TransactionsComponent {
    constructor(transactionService) {
        this.transactionService = transactionService;
        this.mode = 'Observable';
    }
    getTransactions() {
        this.transactionService.getTransactions()
            .subscribe(transactions => this.transactions = transactions, error => this.errorMessage = error);
    }
    ngOnInit() {
        this.getTransactions();
    }
    addTransaction(id, payee) {
        if (!payee) {
            return;
        }
        this.transactionService.addTransaction(id, payee)
            .subscribe(transaction => this.transactions = transaction, error => this.errorMessage = error);
    }
    onSelect(transaction) {
        this.selectedTransaction = transaction;
    }
};
TransactionsComponent = __decorate([
    core_1.Component({
        selector: 'trans-app',
        directives: [transaction_detail_component_1.TransactionDetailComponent],
        templateUrl: 'includes/transaction-item-list.html'
    }), 
    __metadata('design:paramtypes', [transaction_service_1.TransactionService])
], TransactionsComponent);
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=transactions.component.js.map