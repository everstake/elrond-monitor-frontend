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

export const getMiniblock = (hash) => APIService.get(`/miniblock/${hash}`);

export const getValidatorsMap = () => APIService.get('/validators/map');

export const getStatsValidators = () => APIService.get('/stats/validators');

export const getValidators = (params) => APIService.get('/validators', params);

export const getStakingProviders = (params) =>
  APIService.get('/staking/providers', params);

export const getNodes = (params) => APIService.get('/nodes', params);

export const getValidatorStats = (params) =>
  APIService.get(`/validator/${params.identity}`);

export const getStakingProviderStats = (params) =>
  APIService.get(`/staking/provider/${params.provider}`);

export const getStakeRange = (params) => APIService.get('/stake/range', params);

export const getPriceRange = (params) => APIService.get('/price/range', params);

export const getDelegatorsRange = (params) =>
  APIService.get('/delegators/range', params);

export const getProvidersRanking = () => APIService.get('/providers/ranking');

export const getStakingEvents = (params) =>
  APIService.get('/stake/events', params);
