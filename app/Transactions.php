<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'payee', 'payment_type',
        'transaction', 'transaction_type', 'description', 'transaction_date', 'check_number',
        'balanced',
    ];

    protected $table = 'transactions';
}
