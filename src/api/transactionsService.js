import service from './service';
import { items } from '@/constants/items';

const MockApi = service.createService({
  baseURL: 'https://60df0e79abbdd9001722d210.mockapi.io',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const getTransactions = async () => {
  return items.transactions;
};
