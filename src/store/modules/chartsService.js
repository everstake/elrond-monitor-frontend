import {
  getAccountsChart,
  getEpochDoughnut,
  getTransactionsChart,
  getStakeRange,
  getPriceRange,
  getDelegatorsRange,
  getProvidersRanking,
} from '../../api/services';

const chartsService = {
  state: {
    accountsChart: [],
    transactionsChart: [],
    epochDoughnut: {},
    stakeRange: [],
    priceRange: [],
    delegatorsRange: [],
    providersRanking: [],
  },
  getters: {
    accountsChart: (state) => state.accountsChart,
    transactionsChart: (state) => state.transactionsChart,
    epochDoughnut: (state) => state.epochDoughnut,
    stakeRange: (state) => state.stakeRange,
    priceRange: (state) => state.priceRange,
    delegatorsRange: (state) => state.delegatorsRange,
    providersRanking: (state) => state.providersRanking,
  },
  mutations: {
    setAccountsChart(state, item) {
      state.accountsChart = item;
    },
    setTransactionsChart(state, item) {
      state.transactionsChart = item;
    },
    setEpochDoughnut(state, item) {
      state.epochDoughnut = item;
    },
    setStakeRange(state, item) {
      state.stakeRange = item;
    },
    setPriceRange(state, item) {
      state.priceRange = item;
    },
    setDelegatorsRange(state, item) {
      state.delegatorsRange = item;
    },
    setProvidersRanking(state, item) {
      state.providersRanking = item;
    },
  },
  actions: {
    async fetchAccountsChart({ commit }) {
      try {
        const resp = await getAccountsChart();
        commit('setAccountsChart', resp.data);
      } catch (e) {
        console.error(e);
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
    async fetchStakeRange({ commit }, params) {
      try {
        const resp = await getStakeRange({ params });
        commit('setStakeRange', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchPriceRange({ commit }, params) {
      try {
        const resp = await getPriceRange({ params });
        commit('setPriceRange', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchDelegatorsRange({ commit }, params) {
      try {
        const resp = await getDelegatorsRange({ params });
        commit('setDelegatorsRange', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchProvidersRanking({ commit }) {
      try {
        const resp = await getProvidersRanking();
        commit('setProvidersRanking', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};

export default chartsService;
