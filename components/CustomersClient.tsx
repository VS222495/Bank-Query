'use client';

import { useCustomers } from '@/hooks/useQueries';
import CreateCustomerForm from '@/components/CreateCustomerForm';

export default function CustomersClient() {
  const customersData = useCustomers();
  const customers = customersData.data || [];
  const isLoading = customersData.isLoading;
  const error = customersData.error;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Zakaznici</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>Seznam zakazniku</p>

      <CreateCustomerForm />

      {error && (
        <div style={{ background: '#ffcccc', padding: '10px', marginBottom: '20px', borderRadius: '5px' }}>
          Chyba pri nacteni zakazniku
        </div>
      )}

      {isLoading && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Nacitam data...
        </div>
      )}

      {!isLoading && customers.length > 0 && (
        <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Jmeno</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Mesto</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer: any) => {
                return (
                  <tr key={customer.id}>
                    <td>{customer.first_name} {customer.last_name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone ? customer.phone : '-'}</td>
                    <td>{customer.city ? customer.city : '-'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      
      {!isLoading && !error && customers.length === 0 && (
        <div style={{ background: 'white', padding: '20px', textAlign: 'center' }}>
          Zadni zakaznici
        </div>
      )}
    </div>
  );
}
