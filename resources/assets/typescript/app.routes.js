"use strict";
const router_1 = require('@angular/router');
const transactions_component_1 = require('./transactions.component');
const dashboard_component_1 = require('./dashboard.component');
const transaction_detail_component_1 = require('./transaction-detail.component');
const routes = [
    {
        path: 'transactions',
        component: transactions_component_1.TransactionsComponent
    },
    // {
    //   path: 'transactions/add',
    //   component: TransactionsFormComponent
    // },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: transaction_detail_component_1.TransactionDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map