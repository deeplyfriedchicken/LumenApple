import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http';

import { TransactionService } from './transaction.service';
import { TransactionsComponent } from './transactions.component';
import { HomeGraphComponent } from './home-graph.component';

@Component({
  selector: 'my-app',
  templateUrl: 'includes/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TransactionService, HTTP_PROVIDERS],
})
export class AppComponent {

}
