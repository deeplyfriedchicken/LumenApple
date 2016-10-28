import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx'; // importing RxJs operators like map

import { Transaction } from './transaction';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransactionService {
  transaction: any;
  constructor (private _http: Http) {}

  private transactionsUrl = "/api/transactions";

  getTransactions(): Observable<Transaction[]> {
      let transactions$ = this._http.get(this.transactionsUrl)
          .map(this.mapTransactions);
      console.log(transactions$);
      return transactions$;
  }

  getTransaction(id): Observable<Transaction[]> {
    let transaction = this._http.get(this.transactionsUrl+'/'+`id`).map(this.mapTransactions);
    return transaction;
  }

  addTransaction(id: number, payee: string): Observable<Transaction[]> {
    let body = JSON.stringify({ id, payee });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.transactionsUrl, body, options)
        .map(this.mapTransactions);
  }

  private mapTransactions(res: Response): Transaction[] {
    return res.json();
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  // Add new Transaction
 //  private post(transaction: Transaction): Promise<Transaction> {
 //    let headers = new Headers({
 //    'Content-Type': 'application/json'});
 //
 //    return this.http
 //      .post(this.transactionsUrl, JSON.stringify(transaction), {headers: headers})
 //      .toPromise()
 //      .then(res => res.json().data)
 //      .catch(this.handleError);
 //  }
 //
 //  // Update existing Transaction
 //  private put(transaction: Transaction) {
 //    let headers = new Headers();
 //    headers.append('Content-Type', 'application/json');
 //
 //    let url =  `${this.transactionsUrl}/${transaction.id}`;
 //
 //    return this.http
 //      .post(this.transactionsUrl, JSON.stringify(transaction), {headers: headers})
 //      .toPromise()
 //      .then(res => res.json().data)
 //      .catch(this.handleError);
 //  }
 //
 //  // delete transaction
 //  delete(transaction: Transaction) {
 //    let headers = new Headers({
 //    'Content-Type': 'application/json'});
 //
 //    let url =  `${this.transactionsUrl}/${transaction.id}`;
 //
 //    return this.http
 //      .post(this.transactionsUrl, JSON.stringify(transaction), {headers: headers})
 //      .toPromise()
 //      .then(res => res.json().data)
 //      .catch(this.handleError);
 //  }
 //
 //  save(transaction: Transaction): Promise<Transaction> {
 //    if (transaction.id) {
 //      return this.put(transaction);
 //    }
 //    return this.post(transaction);
 //
 // }
 // getTransaction(id: number) {
 //    return this.getTransactions().find(transactions => transactions.find(transaction => transaction.id === id));
 //  }
}
