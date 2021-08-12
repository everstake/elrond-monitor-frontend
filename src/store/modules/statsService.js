import {
  getAccountsChart,
  getEpochDoughnut,
  getStats,
  getTransactionsChart,
} from '../../api/services';

const statsService = {
  state: {
    stats: {},
    accountsChart: [],
    transactionsChart: [],
    epochDoughnut: {},
    loading: false,
  },
  getters: {
    stats: (state) => state.stats,
    accountsChart: (state) => state.accountsChart,
    transactionsChart: (state) => state.transactionsChart,
    epochDoughnut: (state) => state.epochDoughnut,
    loadingStatus: (state) => state.loading,
  },
  mutations: {
    setStats(state, item) {
      state.stats = item;
    },
    setAccountsChart(state, item) {
      state.accountsChart = item;
    },
    setTransactionsChart(state, item) {
      state.transactionsChart = item;
    },
    setEpochDoughnut(state, item) {
      state.epochDoughnut = item;
    },
    setLoading(state, bol) {
      state.loading = bol;
    },
  },
  actions: {
    async fetchStats({ commit }) {
      try {
        const resp = await getStats();
        commit('setStats', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchAccountsChart({ commit }) {
      try {
        commit('setLoading', true);
        const resp = await getAccountsChart();
        commit('setAccountsChart', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchTransactionsChart({ commit }) {
      try {
        const resp = await getTransactionsChart();
        commit('setTransactionsChart', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchEpochDoughnut({ commit }) {
      try {
        const resp = await getEpochDoughnut();
        commit('setEpochDoughnut', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default statsService;
