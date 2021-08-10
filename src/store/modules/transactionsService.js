import { getTransaction, getTransactions } from "../../api/services";

const transactionsService = {
  state: {
    transactions: [],
    totalTransactionItems: 0,
    transaction: {},
  },
  getters: {
    transactions: (state) => state.transactions,
    totalTransactionItems: (state) => state.totalTransactionItems,
    transaction: (state) => state.transaction,
  },
  mutations: {
    setTransactions(state, transactions) {
      state.transactions = transactions;
    },
    setTotalTransactionItems(state, val) {
      state.totalTransactionItems = val;
    },
    setTransaction(state, item) {
      state.transaction = item;
    },
  },
  actions: {
    async fetchTransactions({ commit }, params) {
      try {
        const transactions = await getTransactions({ params });
        commit('setTransactions', transactions.data.items);
        commit('setTotalTransactionItems', transactions.data.count);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchTransaction({ commit }, hash) {
      try {
        const resp = await getTransaction(hash);
        commit('setTransaction', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default transactionsService;
