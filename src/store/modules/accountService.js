import { getAccounts, getAccount } from '@/api/services';

const accountService = {
  state: {
    accounts: [],
    account: {},
    totalItemsAccount: 1,
    loading: false,
  },
  getters: {
    accounts: (state) => state.accounts,
    account: (state) => state.account,
    totalItemsAccount: (state) => state.totalItemsAccount,
    loadingAcc: (state) => state.loading,
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
  },
};

export default accountService;
