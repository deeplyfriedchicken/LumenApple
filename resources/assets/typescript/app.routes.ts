import { provideRouter, RouterConfig }  from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { DashboardComponent } from './dashboard.component';
import { HomeGraphComponent } from './home-graph.component';
import { TransactionDetailComponent } from './transaction-detail.component';

const routes: RouterConfig = [
    {
      path: 'transactions',
      component: TransactionsComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'detail/:id',
      component: TransactionDetailComponent
    }
];

export const appRouterProviders = [
  provideRouter(routes)
];
