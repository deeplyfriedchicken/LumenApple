<?php

namespace App\Http\Controllers;

use App\Transactions;
use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    public function index()
    {
        $transactions = Transactions::all();

        return response()->json($transactions);
    }

    public function read($id)
    {
        $transaction = Transactions::find($id);

        return response()->json($transaction);
    }

    public function create(Request $request)
    {
        $transaction = Transactions::create($request->all());

        return response()->json($transaction);
    }

    public function update(Request $request, $id)
    {
        $transaction = Transactions::find($id);

        $updated = $transaction->update($request->all());

        return response()->json(['updated' => $updated]);
    }

    public function delete($id)
    {
        $deletedRows = Transactions::destroy($id);

        $deleted = $deletedRows == 1;

        return response()->json(['deleted' => $deleted]);
    }

}
