import { getTransaction, getTransactions } from '../../api/services';

const transactionsService = {
  state: {
    transactions: [],
    totalTransactionItems: 0,
    transaction: {},
    loading: false,
    txWebSocket: [],
    updateTx: [],
  },
  getters: {
    transactions: (state) => {
      if (state.txWebSocket) {
        return state.updateTx;
      }

      return state.transactions;
    },
    totalTransactionItems: (state) => state.totalTransactionItems,
    transaction: (state) => state.transaction,
    loadingTx: (state) => state.loading,
  },
  mutations: {
    setTransactions(state, transactions) {
      state.transactions = transactions.items;
      state.updateTx = transactions.items;
      state.totalTransactionItems = transactions.count;
    },
    setTransaction(state, item) {
      state.transaction = item;
    },
    setLoaderTx(state, bool) {
      state.loading = bool;
    },
    setUpdateTxSocket(state, item) {
      state.updateTx = [...item, ...state.updateTx.slice(0, -item.length)];
    },
  },
  actions: {
    async fetchTransactions({ commit }, params) {
      try {
        commit('setLoaderTx', true);
        const transactions = await getTransactions({ params });
        commit('setTransactions', transactions.data);
      } catch (err) {
        console.error(err);
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
    fetchWebSocketTx({ commit }, payload) {
      commit('setUpdateTxSocket', payload);
    },
  },
};

export default transactionsService;
