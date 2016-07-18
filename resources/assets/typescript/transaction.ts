export class Transaction {
  id: number;
  user_id: number;
  account_id: number;
  payee: string;
  payment_type: string;
  transaction_type: string;
  check_number: number;
  amount: number;
  description: string;
  transaction_date: string;
  balanced: number;
  created_at: string;
  updated_at: string;
}
