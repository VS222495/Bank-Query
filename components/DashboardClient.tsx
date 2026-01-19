'use client';

import { useTransactions, useCustomers, useAccounts } from '@/hooks/useQueries';
import Link from 'next/link';

export default function DashboardClient() {
  const transactionsData = useTransactions();
  const transactions = transactionsData.data || [];
  const transactionsLoading = transactionsData.isLoading;
  
  const customersData = useCustomers();
  const customers = customersData.data || [];
  const customersLoading = customersData.isLoading;
  
  const accountsData = useAccounts();
  const accounts = accountsData.data || [];
  const accountsLoading = accountsData.isLoading;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>Dashboard</h1>
      <p style={{ marginBottom: '30px', color: '#666' }}>Prehled bankovniho systemu</p>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '5px', flex: 1 }}>
          <h3 style={{ marginBottom: '10px', color: '#666' }}>Transakce</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#0066cc' }}>
            {transactionsLoading ? '...' : transactions.length}
          </p>
          <Link href="/transactions" style={{ color: '#0066cc', fontSize: '14px', textDecoration: 'none' }}>
            Zobrazit vsechny
          </Link>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '5px', flex: 1 }}>
          <h3 style={{ marginBottom: '10px', color: '#666' }}>Zakaznici</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#00aa00' }}>
            {customersLoading ? '...' : customers.length}
          </p>
          <Link href="/customers" style={{ color: '#00aa00', fontSize: '14px', textDecoration: 'none' }}>
            Zobrazit vsechny
          </Link>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '5px', flex: 1 }}>
          <h3 style={{ marginBottom: '10px', color: '#666' }}>Ucty</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#9900cc' }}>
            {accountsLoading ? '...' : accounts.length}
          </p>
          <Link href="/accounts" style={{ color: '#9900cc', fontSize: '14px', textDecoration: 'none' }}>
            Zobrazit vsechny
          </Link>
        </div>
      </div>
    </div>
  );
}
