export class AddTransactionService {
  get() {
    return this.transactionItems;
  }

  add(transactionItem) {
    this.transactionItems.push(transactionItem);
  }

  delete(transactionItem) {
    var index = this.transactionItems.indexof(transactionItem);
    if (index >= 0) {
      this.transactionItems.splice(index, 1);
    }

    transactionItems = [

    ]
  }
}
