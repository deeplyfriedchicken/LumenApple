import { Component } from 'angular2/core';
import { Control, Validators, FormBuilder } from 'angular2/common';

@Component({
    selector: 'add-transaction-form',
    templateUrl: 'includes/add-transaction-form.html'
})

export class AddTransactionFormComponent {
  form;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      'payee': new Control(''),
      'account': new Control(''),
      'amount': new Control(''),
      'transaction_date': new Control(''),
      'description': new Control(''),
      'payment_type': new Control('payment_type'),
      'transaction_type': new Control('transaction_type'),

    });
  }

  onSubmit(transactionItem) {
    console.log(transactionItem);
  }
}
