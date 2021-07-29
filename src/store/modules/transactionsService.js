import { getTransactions } from '../../api/accountsService';

const transactionsService = {
  state: {
    transactions: [],
  },
  mutations: {
    fetchTransactions(state, transactions) {
      state.transactions = transactions;
    },
  },
  actions: {
    async fetchTransactions({ commit }, params) {
      console.log(params);
      try {
        const transactions = await getTransactions({ params });
        commit('fetchTransactions', transactions.data.items);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    transactions: (state) => state.transactions,
  },
};

export default transactionsService;
