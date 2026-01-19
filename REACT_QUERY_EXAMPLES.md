# React Query - Příklady použití

Tento soubor obsahuje příklady, jak používat React Query hooks v aplikaci.

## Základní použití

### Načtení dat (Query)

```typescript
'use client';

import { useTransactions } from '@/hooks/useQueries';

function TransactionsComponent() {
  const { data, isLoading, error } = useTransactions(1, 50);

  if (isLoading) return <div>Načítání...</div>;
  if (error) return <div>Chyba: {error.message}</div>;

  return (
    <div>
      {data.map((transaction) => (
        <div key={transaction.id}>{transaction.amount}</div>
      ))}
    </div>
  );
}
```

### Vytvoření transakce (Mutation)

```typescript
'use client';

import { useCreateTransaction } from '@/hooks/useQueries';
import { useState } from 'react';

function CreateTransactionForm() {
  const [amount, setAmount] = useState('');
  const createTransaction = useCreateTransaction();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createTransaction.mutateAsync({
        account_id: 'some-account-id',
        transaction_type: 'deposit',
        amount: parseFloat(amount),
        description: 'Vklad na účet',
      });
      
      alert('Transakce vytvořena!');
      setAmount('');
    } catch (error) {
      alert('Chyba při vytváření transakce');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Částka"
      />
      <button type="submit" disabled={createTransaction.isPending}>
        {createTransaction.isPending ? 'Vytváří se...' : 'Vytvořit transakci'}
      </button>
    </form>
  );
}
```

## Všechny dostupné hooks

### Transakce

```typescript
// Načtení seznamu transakcí
const { data, isLoading, error } = useTransactions(page, limit);

// Načtení jedné transakce
const { data } = useTransaction(transactionId);

// Vytvoření transakce
const createMutation = useCreateTransaction();
createMutation.mutate({ account_id, transaction_type, amount });
```

### Zákazníci

```typescript
// Načtení seznamu zákazníků
const { data } = useCustomers(page, limit);

// Načtení jednoho zákazníka
const { data } = useCustomer(customerId);

// Vytvoření zákazníka
const createMutation = useCreateCustomer();
createMutation.mutate({ first_name, last_name, email });

// Aktualizace zákazníka
const updateMutation = useUpdateCustomer();
updateMutation.mutate({ id: customerId, data: { email: 'new@email.com' } });

// Smazání zákazníka
const deleteMutation = useDeleteCustomer();
deleteMutation.mutate(customerId);
```

### Účty

```typescript
// Načtení seznamu účtů
const { data } = useAccounts(page, limit);

// Načtení jednoho účtu
const { data } = useAccount(accountId);

// Načtení účtů zákazníka
const { data } = useAccountsByCustomer(customerId);

// Vytvoření účtu
const createMutation = useCreateAccount();
createMutation.mutate({ customer_id, account_type, currency });

// Aktualizace účtu
const updateMutation = useUpdateAccount();
updateMutation.mutate({ id: accountId, data: { status: 'active' } });

// Smazání účtu
const deleteMutation = useDeleteAccount();
deleteMutation.mutate(accountId);
```

## Pokročilé funkce

### Ruční refetch

```typescript
const { data, refetch } = useTransactions();

// Načti data znovu
refetch();
```

### Invalidace cache

```typescript
import { useQueryClient } from '@tanstack/react-query';

function MyComponent() {
  const queryClient = useQueryClient();

  const handleAction = () => {
    // Invaliduj všechny transakce
    queryClient.invalidateQueries({ queryKey: ['transactions'] });
  };
}
```

### Optimistic updates

```typescript
const updateCustomer = useUpdateCustomer();

updateCustomer.mutate(
  { id: '123', data: { email: 'new@email.com' } },
  {
    onMutate: async (newData) => {
      // Zruš předchozí queries
      await queryClient.cancelQueries({ queryKey: ['customer', '123'] });

      // Ulož předchozí data
      const previousData = queryClient.getQueryData(['customer', '123']);

      // Optimisticky updatuj UI
      queryClient.setQueryData(['customer', '123'], newData);

      return { previousData };
    },
    onError: (err, newData, context) => {
      // Při chybě vrať předchozí data
      queryClient.setQueryData(['customer', '123'], context?.previousData);
    },
  }
);
```

## Konfigurace React Query

Globální konfigurace je v `components/Providers.tsx`:

```typescript
new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Data jsou čerstvá 1 minutu
      refetchOnWindowFocus: true, // Refetch při přepnutí do okna
    },
  },
})
```

## Debugování

Pro debug můžeš použít React Query DevTools:

1. Nainstaluj: `npm install @tanstack/react-query-devtools`
2. Přidej do `components/Providers.tsx`:

```typescript
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// V return části:
<QueryClientProvider client={queryClient}>
  {children}
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
```
