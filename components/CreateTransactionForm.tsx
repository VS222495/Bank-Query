'use client';

import { useState } from 'react';
import { useCreateTransaction, useAccounts } from '@/hooks/useQueries';

export default function CreateTransactionForm() {
  const [accountId, setAccountId] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  
  const createMutation = useCreateTransaction();
  const accountsData = useAccounts();
  const accounts = accountsData.data || [];

  function handleSubmit(e: any) {
    e.preventDefault();
    
    const transactionData = {
      account_id: accountId,
      transaction_type: transactionType,
      amount: Number(amount),
      description: description
    };
    
    createMutation.mutate(transactionData);
    
    setAccountId('');
    setTransactionType('deposit');
    setAmount('');
    setDescription('');
  }

  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Nova transakce</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ucet:</label>
          <select 
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
          >
            <option value="">Vyberte ucet</option>
            {accounts.map((account: any) => (
              <option key={account.id} value={account.id}>
                {account.account_number} - {account.balance} {account.currency}
              </option>
            ))}
          </select>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Typ:</label>
          <select 
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
          >
            <option value="deposit">Vklad</option>
            <option value="withdrawal">Vyber</option>
            <option value="transfer">Prevod</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Castka:</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Popis:</label>
          <input 
            type="text" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={createMutation.isPending}
          style={{ 
            background: '#0066cc', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '3px', 
            cursor: 'pointer' 
          }}
        >
          {createMutation.isPending ? 'Ukladam...' : 'Vytvorit transakci'}
        </button>
        
        {createMutation.isSuccess && (
          <div style={{ marginTop: '10px', color: '#00aa00' }}>Transakce vytvorena!</div>
        )}
        
        {createMutation.isError && (
          <div style={{ marginTop: '10px', color: '#cc0000' }}>Chyba pri vytvareni</div>
        )}
      </form>
    </div>
  );
}
