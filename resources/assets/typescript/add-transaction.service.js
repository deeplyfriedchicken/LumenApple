"use strict";
var AddTransactionService = (function () {
    function AddTransactionService() {
    }
    AddTransactionService.prototype.get = function () {
        return this.transactionItems;
    };
    AddTransactionService.prototype.add = function (transactionItem) {
        this.transactionItems.push(transactionItem);
    };
    AddTransactionService.prototype.delete = function (transactionItem) {
        var index = this.transactionItems.indexof(transactionItem);
        if (index >= 0) {
            this.transactionItems.splice(index, 1);
        }
        transactionItems = [];
    };
    return AddTransactionService;
}());
exports.AddTransactionService = AddTransactionService;
//# sourceMappingURL=add-transaction.service.js.map