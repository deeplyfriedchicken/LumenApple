<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Transactions;

class TransactionsTableSeeder extends Seeder
{
    public function run()
    {
        Transactions::create([
            'user_id' => '1',
            'account_id' => '2',
            'payee' => 'Joanns',
            'payment_type' => 'EFT',
            'transaction_type' => 'debit',
            'amount' => 19.21,
            'description' => 'Craft supplies including zippers, felt, etc.',
            'transaction_date' => '2016-07-04'
        ]);
    }
}
