import { items } from '@/constants/items';
import { APIService } from './index';

export const getAccounts = (params) => APIService.get('/accounts', params);

export const getAccount = (address) => APIService.get(`/account/${address}`);

export const getTransactions = (params) =>
  APIService.get('/transactions', params);

export const getTransaction = (hash) => APIService.get(`/transaction/${hash}`);

export const getBlocks = (params) => APIService.get('/blocks', params);

export const getBlock = (hash) => APIService.get(`/block/${hash}`);

export const getBlockNonce = (params) =>
  APIService.get(`/block/${params.shard}/${params.nonce}`);

export const getValidators = () => items.validators;
