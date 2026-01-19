'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '@/lib/api';

export function useTransactions() {
  const result = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const response = await api.getTransactions();
      if (response.data && response.data.transactions) {
        return response.data.transactions;
      } else if (response.data && response.data.data) {
        return response.data.data;
      }
      return [];
    },
  });
  return result;
}

export function useTransaction(id: string) {
  const result = useQuery({
    queryKey: ['transaction', id],
    queryFn: async () => {
      const response = await api.getTransaction(id);
      return response.data;
    },
    enabled: !!id,
  });
  return result;
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return await api.createTransaction(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
  });
  return mutation;
}

export function useCustomers() {
  const result = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const response = await api.getCustomers();
      if (response.data && response.data.customers) {
        return response.data.customers;
      } else if (response.data && response.data.data) {
        return response.data.data;
      }
      return [];
    },
  });
  return result;
}

export function useCustomer(id: string) {
  const result = useQuery({
    queryKey: ['customer', id],
    queryFn: async () => {
      const response = await api.getCustomer(id);
      return response.data;
    },
    enabled: !!id,
  });
  return result;
}

export function useCreateCustomer() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return await api.createCustomer(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
  return mutation;
}

export function useUpdateCustomer() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      return await api.updateCustomer(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
  return mutation;
}

export function useDeleteCustomer() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await api.deleteCustomer(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
  return mutation;
}

export function useAccounts() {
  const result = useQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      const response = await api.getAccounts();
      if (response.data && response.data.accounts) {
        return response.data.accounts;
      } else if (response.data && response.data.data) {
        return response.data.data;
      }
      return [];
    },
  });
  return result;
}

export function useAccount(id: string) {
  const result = useQuery({
    queryKey: ['account', id],
    queryFn: async () => {
      const response = await api.getAccount(id);
      return response.data;
    },
    enabled: !!id,
  });
  return result;
}

export function useAccountsByCustomer(customerId: string) {
  const result = useQuery({
    queryKey: ['accounts', 'customer', customerId],
    queryFn: async () => {
      const response = await api.getAccountsByCustomer(customerId);
      return response.data;
    },
    enabled: !!customerId,
  });
  return result;
}

export function useCreateAccount() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return await api.createAccount(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
  });
  return mutation;
}

export function useUpdateAccount() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      return await api.updateAccount(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
  });
  return mutation;
}

export function useDeleteAccount() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await api.deleteAccount(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
  return mutation;
}
