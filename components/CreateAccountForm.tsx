'use client';

import { useState } from 'react';
import { useCreateAccount, useCustomers } from '@/hooks/useQueries';

export default function CreateAccountForm() {
  const [customerId, setCustomerId] = useState('');
  const [accountType, setAccountType] = useState('checking');
  const create = useCreateAccount();
  const customers = useCustomers().data || [];

  function handleSubmit(e: any) {
    e.preventDefault();
    create.mutate({ customer_id: customerId, account_type: accountType, currency: 'CZK' });
    setCustomerId('');
  }

  const selectStyle = { width: '100%', padding: '8px', border: '1px solid #ddd' };

  return (
    <div style={{ background: 'white', padding: '20px', marginBottom: '20px' }}>
      <h2>Novy ucet</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Zakaznik:</label>
          <select value={customerId} onChange={(e) => setCustomerId(e.target.value)} required style={selectStyle}>
            <option value="">Vyberte</option>
            {customers.map((c: any) => (
              <option key={c.id} value={c.id}>{c.first_name} {c.last_name}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Typ:</label>
          <select value={accountType} onChange={(e) => setAccountType(e.target.value)} style={selectStyle}>
            <option value="checking">Bezny</option>
            <option value="savings">Sporici</option>
          </select>
        </div>
        <button type="submit" style={{ background: '#9900cc', color: 'white', padding: '10px 20px', border: 'none' }}>
          {create.isPending ? 'Ukladam...' : 'Vytvorit'}
        </button>
        {create.isSuccess && <div style={{ color: '#00aa00' }}>Hotovo!</div>}
        {create.isError && <div style={{ color: '#cc0000' }}>Chyba!</div>}
      </form>
    </div>
  );
}
