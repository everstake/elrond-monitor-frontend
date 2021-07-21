import { getTransactions } from "../../api/transactionsService";

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
    async fetchTransactions({ commit }) {
      try {
        const transactions = await getTransactions();
        commit('fetchTransactions', transactions)
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    transactions: (state) => state.transactions,
  }
}

export default transactionsService;
