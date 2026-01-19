'use client';

export default function TransactionList({ transactions }: any) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString('cs-CZ');
  }

  function getTypeName(type: string) {
    if (type === 'deposit') {
      return 'Vklad';
    }
    if (type === 'withdrawal') {
      return 'Vyber';
    }
    if (type === 'transfer') {
      return 'Prevod';
    }
    return type;
  }

  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Typ</th>
            <th>Castka</th>
            <th>Popis</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: any) => {
            return (
              <tr key={transaction.id}>
                <td>{formatDate(transaction.created_at)}</td>
                <td>{getTypeName(transaction.transaction_type)}</td>
                <td>
                  {transaction.transaction_type === 'withdrawal' && '-'}
                  {transaction.transaction_type === 'deposit' && '+'}
                  {transaction.amount} Kc
                </td>
                <td>{transaction.description ? transaction.description : '-'}</td>
                <td>{transaction.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
