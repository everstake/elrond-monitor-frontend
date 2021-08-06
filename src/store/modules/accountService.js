import {
  getAccounts,
  getAccount,
} from '@/api/services';

const accountService = {
  state: {
    accounts: [],
    account: {},
    totalItemsAccount: 1,
  },
  getters: {
    accounts: (state) => state.accounts,
    account: (state) => state.account,
    totalItemsAccount: (state) => state.totalItemsAccount,
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
  },
  actions: {
    async fetchAccounts({ commit }, params) {
      try {
        const accounts = await getAccounts({ params });
        commit('setTotalItemsAcc', accounts.data.count);
        commit('setAccounts', accounts.data.items);
      } catch (err) {
        console.error(err);
      }
    },
    async fetchAccount({ commit }, address) {
      try {
        const acc = await getAccount(address);

        commit('setAccount', acc.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default accountService;
