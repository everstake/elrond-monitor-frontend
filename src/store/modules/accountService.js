import { getAccounts, getAccount, getAccountESDT } from '@/api/services';

const accountService = {
  state: {
    accounts: [],
    account: {},
    totalItemsAccount: 1,
    loading: false,
    accountESDTTokens: [],
    totalItemsToken: 1,
    esdtLoading: false,
  },
  getters: {
    accounts: (state) => state.accounts,
    account: (state) => state.account,
    totalItemsAccount: (state) => state.totalItemsAccount,
    loadingAcc: (state) => state.loading,
    accountESDTTokens: (state) => state.accountESDTTokens,
    totalItemsToken: (state) => state.totalItemsToken,
    loadingAccESDTTokens: (state) => state.esdtLoading,
  },
  mutations: {
    setAccounts(state, accounts) {
      state.accounts = accounts.items;
      state.totalItemsAccount = accounts.count;
    },
    setAccount(state, account) {
      state.account = account;
    },
    setLoaderAccounts(state, bool) {
      state.loading = bool;
    },
    setAccountESDTTokens(state, tokens) {
      state.accountESDTTokens = tokens.items;
      state.totalItemsToken = tokens.count;
    },
    setLoadingAccESDTTokens(state, bool) {
      state.esdtLoading = bool;
    },
  },
  actions: {
    async fetchAccounts({ commit }, params) {
      try {
        commit('setLoaderAccounts', true);
        const accounts = await getAccounts({ params });
        commit('setAccounts', accounts.data);
      } catch (err) {
        console.error(err);
      } finally {
        commit('setLoaderAccounts', false);
      }
    },
    async fetchAccount({ commit }, address) {
      try {
        commit('setLoaderAccounts', true);
        const acc = await getAccount(address);
        commit('setAccount', acc.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoaderAccounts', false);
      }
    },
    async fetchAccountESDT({ commit }, params) {
      try {
        commit('setLoadingAccESDTTokens', true);
        const resp = await getAccountESDT({ params });
        commit('setAccountESDTTokens', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingAccESDTTokens', false);
      }
    },
  },
};

export default accountService;
