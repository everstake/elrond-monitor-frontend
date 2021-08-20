import { getTransaction, getTransactions } from '../../api/services';

const transactionsService = {
  state: {
    transactions: [],
    totalTransactionItems: 0,
    transaction: {},
    loading: false,
  },
  getters: {
    transactions: (state) => state.transactions,
    totalTransactionItems: (state) => state.totalTransactionItems,
    transaction: (state) => state.transaction,
    loadingTx: (state) => state.loading,
  },
  mutations: {
    setTransactions(state, transactions) {
      state.transactions = transactions.items;
      state.totalTransactionItems = transactions.count;
    },
    setTransaction(state, item) {
      state.transaction = item;
    },
    setLoading(state, bol) {
      state.loading = bol;
    },
  },
  actions: {
    async fetchTransactions({ commit }, params) {
      try {
        commit('setLoading', true);
        const transactions = await getTransactions({ params });
        commit('setTransactions', transactions.data);
      } catch (err) {
        console.log(err);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchTransaction({ commit }, hash) {
      try {
        commit('setLoading', true);
        const resp = await getTransaction(hash);
        commit('setTransaction', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

export default transactionsService;
