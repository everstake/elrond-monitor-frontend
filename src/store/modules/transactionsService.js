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
    setLoaderTx(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    async fetchTransactions({ commit }, params) {
      try {
        commit('setLoaderTx', true);
        const transactions = await getTransactions({ params });
        commit('setTransactions', transactions.data);
      } catch (err) {
        console.log(err);
      } finally {
        commit('setLoaderTx', false);
      }
    },
    async fetchTransaction({ commit }, hash) {
      try {
        commit('setLoaderTx', true);
        const resp = await getTransaction(hash);
        commit('setTransaction', resp.data);
        commit('setLoaderTx', false);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoaderTx', false);
      }
    },
  },
};

export default transactionsService;
