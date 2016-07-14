///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap}    from 'angular2/platform/browser';
import {HomeGraphComponent} from './home-graph.component';
import {TransactionSummaryComponent} from './transaction-summary.component';
import {AddTransactionFormComponent} from './add-transaction-form.component';

bootstrap(HomeGraphComponent);
bootstrap(TransactionSummaryComponent);
bootstrap(AddTransactionFormComponent);
