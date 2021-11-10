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
    loadingEpoch: false,
    loadingProvidersRating: false,
    loadingStakeRange: false,
    loadingAccountInfo: false,
    loadingTransactions: false,
    loadingPriceRange: false,
    loadingDelegatorsRange: false,
  },
  getters: {
    accountsChart: (state) => state.accountsChart,
    transactionsChart: (state) => state.transactionsChart,
    epochDoughnut: (state) => state.epochDoughnut,
    stakeRange: (state) => state.stakeRange,
    priceRange: (state) => state.priceRange,
    delegatorsRange: (state) => state.delegatorsRange,
    providersRanking: (state) => state.providersRanking,
    isLoadingEpoch: (state) => state.loadingEpoch,
    isLoadingProvidersRating: (state) => state.loadingProvidersRating,
    isLoadingStakeRange: (state) => state.loadingStakeRange,
    isLoadingAccountInfo: (state) => state.loadingAccountInfo,
    isLoadingTransactions: (state) => state.loadingTransactions,
    isLoadingPriceRange: (state) => state.loadingPriceRange,
    isLoadingDelegatorsRange: (state) => state.loadingDelegatorsRange,
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
    setEpochLoader(state, bool) {
      state.loadingEpoch = bool;
    },
    setLoadingProvidersRating(state, bool) {
      state.loadingProvidersRating = bool;
    },
    setLoadingStakingRange(state, bool) {
      state.loadingStakeRange = bool;
    },
    setLoadingAccountInfo(state, bool) {
      state.loadingAccountInfo = bool;
    },
    setLoadingTransactions(state, bool) {
      state.loadingTransactions = bool;
    },
    setLoadingPriceRange(state, bool) {
      state.loadingPriceRange = bool;
    },
    setLoadingDelegatorsRange(state, bool) {
      state.loadingDelegatorsRange = bool;
    },
  },
  actions: {
    async fetchAccountsChart({ commit }) {
      try {
        commit('setLoadingAccountInfo', true);
        const resp = await getAccountsChart();
        commit('setAccountsChart', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingAccountInfo', false);
      }
    },
    async fetchTransactionsChart({ commit }) {
      try {
        commit('setLoadingTransactions', true);
        const resp = await getTransactionsChart();
        commit('setTransactionsChart', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingTransactions', false);
      }
    },
    async fetchEpochDoughnut({ commit }) {
      try {
        commit('setEpochLoader', true);
        const resp = await getEpochDoughnut();
        commit('setEpochDoughnut', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setEpochLoader', false);
      }
    },
    async fetchStakeRange({ commit }, params) {
      try {
        commit('setLoadingStakingRange', true);
        const resp = await getStakeRange({ params });
        commit('setStakeRange', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingStakingRange', false);
      }
    },
    async fetchPriceRange({ commit }, params) {
      try {
        commit('setLoadingPriceRange', true);
        const resp = await getPriceRange({ params });
        commit('setPriceRange', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingPriceRange', false);
      }
    },
    async fetchDelegatorsRange({ commit }, params) {
      try {
        commit('setLoadingDelegatorsRange', true);
        const resp = await getDelegatorsRange({ params });
        commit('setDelegatorsRange', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingDelegatorsRange', false);
      }
    },
    async fetchProvidersRanking({ commit }) {
      try {
        commit('setLoadingProvidersRating', true);
        const resp = await getProvidersRanking();
        commit('setProvidersRanking', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingProvidersRating', false);
      }
    },
  },
};

export default chartsService;
