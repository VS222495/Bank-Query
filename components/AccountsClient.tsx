'use client';

import { useAccounts } from '@/hooks/useQueries';
import CreateAccountForm from '@/components/CreateAccountForm';

export default function AccountsClient() {
  const accountsData = useAccounts();
  const accounts = accountsData.data || [];
  const isLoading = accountsData.isLoading;
  const error = accountsData.error;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Ucty</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>Seznam uctu</p>

      <CreateAccountForm />

      {error && (
        <div style={{ background: '#ffcccc', padding: '10px', marginBottom: '20px', borderRadius: '5px' }}>
          Chyba pri nacteni uctu
        </div>
      )}

      {isLoading && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Nacitam data...
        </div>
      )}

      {!isLoading && accounts.length > 0 && (
        <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Cislo uctu</th>
                <th>Typ</th>
                <th>Zustatek</th>
                <th>Mena</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account: any) => {
                return (
                  <tr key={account.id}>
                    <td>{account.account_number}</td>
                    <td>{account.account_type}</td>
                    <td>{account.balance} {account.currency}</td>
                    <td>{account.currency}</td>
                    <td>{account.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      
      {!isLoading && !error && accounts.length === 0 && (
        <div style={{ background: 'white', padding: '20px', textAlign: 'center' }}>
          Zadne ucty
        </div>
      )}
    </div>
  );
}
