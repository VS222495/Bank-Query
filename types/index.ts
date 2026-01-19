export interface Transaction {
  id: string;
  account_id: string;
  transaction_type: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  description: string | null;
  reference_number: string;
  recipient_account_id: string | null;
  status: 'completed' | 'pending' | 'failed';
  created_at: string;
}

export interface Account {
  id: string;
  customer_id: string;
  account_number: string;
  account_type: string;
  balance: number;
  currency: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  date_of_birth: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  postal_code: string | null;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page?: number;
  limit?: number;
}
