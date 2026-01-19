const API_URL = 'https://v0-banking-system-backend-phi.vercel.app/api';

export async function getTransactions() {
  try {
    const response = await fetch(API_URL + '/transactions');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri nacitani transakci:', error);
    throw error;
  }
}

export async function getTransaction(id: string) {
  try {
    const response = await fetch(API_URL + '/transactions/' + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba:', error);
    throw error;
  }
}

export async function createTransaction(transactionData: any) {
  try {
    const response = await fetch(API_URL + '/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri vytvareni transakce:', error);
    throw error;
  }
}

export async function getCustomers() {
  try {
    const response = await fetch(API_URL + '/customers');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri nacitani zakazniku:', error);
    throw error;
  }
}

export async function getCustomer(id: string) {
  try {
    const response = await fetch(API_URL + '/customers/' + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba:', error);
    throw error;
  }
}

export async function createCustomer(customerData: any) {
  try {
    const response = await fetch(API_URL + '/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri vytvareni zakaznika:', error);
    throw error;
  }
}

export async function updateCustomer(id: string, customerData: any) {
  try {
    const response = await fetch(API_URL + '/customers/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri uprave zakaznika:', error);
    throw error;
  }
}

export async function deleteCustomer(id: string) {
  try {
    const response = await fetch(API_URL + '/customers/' + id, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    console.log('Chyba pri mazani:', error);
    throw error;
  }
}

export async function getAccounts() {
  try {
    const response = await fetch(API_URL + '/accounts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri nacitani uctu:', error);
    throw error;
  }
}

export async function getAccount(id: string) {
  try {
    const response = await fetch(API_URL + '/accounts/' + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba:', error);
    throw error;
  }
}

export async function getAccountsByCustomer(customerId: string) {
  try {
    const response = await fetch(API_URL + '/accounts?customer_id=' + customerId);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba:', error);
    throw error;
  }
}

export async function createAccount(accountData: any) {
  try {
    const response = await fetch(API_URL + '/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri vytvareni uctu:', error);
    throw error;
  }
}

export async function updateAccount(id: string, accountData: any) {
  try {
    const response = await fetch(API_URL + '/accounts/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Chyba pri uprave uctu:', error);
    throw error;
  }
}

export async function deleteAccount(id: string) {
  try {
    const response = await fetch(API_URL + '/accounts/' + id, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    console.log('Chyba pri mazani uctu:', error);
    throw error;
  }
}
