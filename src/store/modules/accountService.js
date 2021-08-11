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
      state.accounts = accounts;
    },
    setAccount(state, account) {
      state.account = account;
    },
    setTotalItemsAcc(state, count) {
      state.totalItemsAccount = count;
    },
    setLoading(state, bol) {
      state.loading = bol;
    },
  },
  actions: {
    async fetchAccounts({ commit }, params) {
      try {
        commit('setLoading', true);
        const accounts = await getAccounts({ params });
        commit('setTotalItemsAcc', accounts.data.count);
        commit('setAccounts', accounts.data.items);
      } catch (err) {
        console.error(err);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchAccount({ commit }, address) {
      try {
        commit('setLoading', true);
        const acc = await getAccount(address);
        commit('setAccount', acc.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

export default accountService;
