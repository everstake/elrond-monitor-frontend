import service from './service';
// import { items } from '@/constants/items';

const serviceApi = service.createService({
  baseURL: 'http://localhost:9000/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const getAccounts = (params) => serviceApi.get('/accounts', params);

export const getAccount = (address) => serviceApi.get(`/account/${address}`);

export const getTransactions = (params) => serviceApi.get('/transactions', params);
