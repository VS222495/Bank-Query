'use client';

import { useTransactions } from '@/hooks/useQueries';
import TransactionList from '@/components/TransactionList';
import CreateTransactionForm from '@/components/CreateTransactionForm';

export default function TransactionsClient() {
  const transactionsData = useTransactions();
  const transactions = transactionsData.data || [];
  const isLoading = transactionsData.isLoading;
  const error = transactionsData.error;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Transakce</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        {isLoading ? 'Nacitani...' : 'Pocet transakci: ' + transactions.length}
      </p>

      <CreateTransactionForm />

      {error && (
        <div style={{ background: '#ffcccc', padding: '10px', marginBottom: '20px', borderRadius: '5px' }}>
          Chyba pri nacteni transakci
        </div>
      )}

      {isLoading && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Nacitam data...
        </div>
      )}

      {!isLoading && transactions.length > 0 && (
        <TransactionList transactions={transactions} />
      )}
      
      {!isLoading && !error && transactions.length === 0 && (
        <div style={{ background: 'white', padding: '20px', textAlign: 'center' }}>
          Zadne transakce
        </div>
      )}
    </div>
  );
}
