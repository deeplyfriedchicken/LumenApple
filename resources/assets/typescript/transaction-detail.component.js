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
const transaction_1 = require('./transaction');
const router_1 = require('@angular/router');
const transaction_service_1 = require('./transaction.service');
let TransactionDetailComponent = class TransactionDetailComponent {
    constructor(transactionService, route) {
        this.transactionService = transactionService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
            }
            else {
                this.navigated = false;
                this.transaction = new transaction_1.Transaction();
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
    goBack(savedTransaction = null) {
        this.close.emit(savedTransaction);
        if (this.navigated) {
            window.history.back();
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', transaction_1.Transaction)
], TransactionDetailComponent.prototype, "transaction", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], TransactionDetailComponent.prototype, "close", void 0);
TransactionDetailComponent = __decorate([
    core_1.Component({
        selector: 'transaction-detail',
        templateUrl: 'includes/transaction-detail.component.html'
    }), 
    __metadata('design:paramtypes', [transaction_service_1.TransactionService, router_1.ActivatedRoute])
], TransactionDetailComponent);
exports.TransactionDetailComponent = TransactionDetailComponent;
//# sourceMappingURL=transaction-detail.component.js.map