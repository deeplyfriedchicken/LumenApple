<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/version', function () use ($app) {
    return $app->version();
});

$app->get('/', function () use ($app) {
    return view('index');
});
$app->get('/transactions', function () use ($app) {
    return view('index');
});
$app->get('/dashboard', function () use ($app) {
  return view('index');
});
$app->get('detail/{id}', function ($id) {
    return view('index');
});
  $app->group(['prefix' => 'transactions-api', 'namespace' => 'App\Http\Controllers'], function ($app) {
      // Returns all the transactions
      // GET http://localhost:8000/transactions
      $app->get('/', 'TransactionsController@index');

      // Returns the transaction with the chosen $id
      // GET http://localhost:8000/transactions/24
      $app->get('{id}', 'TransactionsController@read');

      // Creates a new transaction
      // POST http://localhost:8000/transactions
      $app->post('/', 'TransactionsController@create');

      // Update the transaction with the chosen $id
      // PUT http://localhost:8000/transactions/24
      $app->put('{id}','TransactionsController@update');

      // Delete the transaction with the chosen $id
      // DELETE http://localhost:8000/transactions/24
      $app->delete('{id}', 'TransactionsController@delete');
  });
$app->get('encode', function (\Illuminate\Http\Request $request) {
    return response()->json([
        'result' => base64_encode($request->input('value')),
    ]);
});

$app->get('decode', function (\Illuminate\Http\Request $request) {
    return response()->json([
        'result' => base64_decode($request->input('value')),
    ]);
});
