import { getTransactions } from '../../api/services';

const transactionsService = {
  state: {
    transactions: [],
    totalTransactionItems: 0,
  },
  mutations: {
    fetchTransactions(state, transactions) {
      state.transactions = transactions;
    },
    fetchTotalTransactionItems(state, val) {
      state.totalTransactionItems = val;
    }
  },
  actions: {
    async fetchTransactions({ commit }, params) {
      try {
        const transactions = await getTransactions({ params });
        commit('fetchTransactions', transactions.data.items);
        commit('fetchTotalTransactionItems', transactions.data.count);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    transactions: (state) => state.transactions,
    totalTransactionItems: (state) => state.totalTransactionItems,
  },
};

export default transactionsService;
