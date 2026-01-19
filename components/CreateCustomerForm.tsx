'use client';

import { useState } from 'react';
import { useCreateCustomer } from '@/hooks/useQueries';

export default function CreateCustomerForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const create = useCreateCustomer();

  function handleSubmit(e: any) {
    e.preventDefault();
    create.mutate({ first_name: firstName, last_name: lastName, email: email });
    setFirstName('');
    setLastName('');
    setEmail('');
  }

  const inputStyle = { width: '100%', padding: '8px', border: '1px solid #ddd' };

  return (
    <div style={{ background: 'white', padding: '20px', marginBottom: '20px' }}>
      <h2>Novy zakaznik</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Jmeno:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Prijmeni:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={inputStyle} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
        </div>
        <button type="submit" style={{ background: '#00aa00', color: 'white', padding: '10px 20px', border: 'none' }}>
          {create.isPending ? 'Ukladam...' : 'Vytvorit'}
        </button>
        {create.isSuccess && <div style={{ color: '#00aa00' }}>Hotovo!</div>}
        {create.isError && <div style={{ color: '#cc0000' }}>Chyba!</div>}
      </form>
    </div>
  );
}
