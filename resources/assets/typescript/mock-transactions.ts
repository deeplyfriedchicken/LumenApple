import { Transaction } from './transaction';

export const TRANSACTIONS: Transaction[] = [
{
      "id": 1,
      "user_id": 1,
      "account_id": 1,
      "payee": "Joannss",
      "payment_type": "EFT",
      "transaction_type": "debit",
      "check_number": null,
      "amount": 19.21,
      "description": "Craft supplies including zippers, felt, etc.",
      "transaction_date": "2016-07-04",
      "balanced": 0,
      "created_at": "2016-07-14 17:03:07",
      "updated_at": "2016-07-14 17:03:07"
  },
  {
        "id": 2,
        "user_id": 1,
        "account_id": 1,
        "payee": "Amazon",
        "payment_type": "EFT",
        "transaction_type": "debit",
        "check_number": null,
        "amount": 16.00,
        "description": "Haunter Plush",
        "transaction_date": "2016-06-30",
        "balanced": 0,
        "created_at": "2016-07-14 17:03:07",
        "updated_at": "2016-07-14 17:03:07"
    },
    {
          "id": 3,
          "user_id": 1,
          "account_id": 1,
          "payee": "Etsy",
          "payment_type": "EFT",
          "transaction_type": "credit",
          "check_number":null,
          "amount": 30.81,
          "description": "Cat bus plush",
          "transaction_date": "2016-06-26",
          "balanced": 0,
          "created_at": "2016-07-14 17:03:07",
          "updated_at": "2016-07-14 17:03:07"
      },
      {
            "id": 4,
            "user_id": 1,
            "account_id": 1,
            "payee": "Subway",
            "payment_type": "EFT",
            "transaction_type": "debit",
            "check_number":null,
            "amount": 9.50,
            "description": "Tuna Sandwhich",
            "transaction_date": "2016-07-15",
            "balanced": 0,
            "created_at": "2016-07-14 17:03:07",
            "updated_at": "2016-07-14 17:03:07"
        }
  ];
