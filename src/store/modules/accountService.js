import {
  getAccounts,
  getAccount,
  getTransactions,
} from '@/api/services';

const accountService = {
  state: {
    accounts: [],
    account: {},
    transactionsAccount: [],
    totalItemsAccount: 1,
    totalTransactionAccount: 1,
  },
  getters: {
    accounts: (state) => state.accounts,
    account: (state) => state.account,
    transactionsAccount: (state) => state.transactionsAccount,
    totalItemsAccount: (state) => state.totalItemsAccount,
    totalTransactionAccount: (state) => state.totalTransactionAccount,
  },
  mutations: {
    fetchAccounts(state, accounts) {
      state.accounts = accounts;
    },
    fetchAccount(state, account) {
      state.account = account;
    },
    fetchTransactionsAccount(state, transactions) {
      state.transactionsAccount = transactions;
    },
    totalItemsAcc(state, count) {
      state.totalItemsAccount = count;
    },
    totalTransactionAccount(state, count) {
      state.totalTransactionAccount = count;
    },
  },
  actions: {
    async fetchAccounts({ commit }, params) {
      try {
        const accounts = await getAccounts({ params });
        commit('totalItemsAcc', accounts.data.count);
        commit('fetchAccounts', accounts.data.items);
      } catch (err) {
        console.error(err);
      }
    },
    async fetchAccount({ commit }, address) {
      try {
        const acc = await getAccount(address);

        commit('fetchAccount', acc.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchTransactionsAccount({ commit }, params) {
      try {
        const transactions = await getTransactions({ params });
        commit('fetchTransactionsAccount', transactions.data.items);
        commit('totalTransactionAccount', transactions.data.count);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default accountService;
