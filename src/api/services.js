import { items } from '@/constants/items';
import { APIService } from './index';

export const getStats = () => APIService.get('/stats');

export const getAccounts = (params) => APIService.get('/accounts', params);

export const getAccount = (address) => APIService.get(`/account/${address}`);

export const getTransactions = (params) =>
  APIService.get('/transactions', params);

export const getTransaction = (hash) => APIService.get(`/transaction/${hash}`);

export const getBlocks = (params) => APIService.get('/blocks', params);

export const getBlock = (hash) => APIService.get(`/block/${hash}`);

export const getBlockNonce = (params) =>
  APIService.get(`/block/${params.shard}/${params.nonce}`);

export const getAccountsChart = () => APIService.get('/accounts/range');

export const getTransactionsChart = () => APIService.get('/transactions/range');

export const getEpochDoughnut = () => APIService.get('/epoch');

export const getValidators = () => items.validators;
