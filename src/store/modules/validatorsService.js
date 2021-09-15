import {
  getValidators,
  getValidatorsMap,
  getStatsValidators,
  getStakingProviders,
  getNodes,
  getValidatorStats,
  getStakingProviderStats,
} from '../../api/services';

const validatorsService = {
  state: {
    stats: {},
    stakingProviders: [],
    nodes: [],
    ranking: [],
    validatorsMap: [],
    validators: [],
    totalItems: 1,
    loading: false,
    validatorsDetails: {},
    stakingDetails: {},
    loadStatsValid: false,
    loadStatsProvider: false,
    loadStatsValidDetails: false,
  },
  getters: {
    statsValidators: (state) => state.stats,
    stakingProviders: (state) => state.stakingProviders,
    nodes: (state) => state.nodes,
    validatorsMap: (state) => state.validatorsMap,
    validators: (state) => state.validators,
    totalItems: (state) => state.totalItems,
    loadingValidators: (state) => state.loading,
    validatorDetails: (state) => state.validatorsDetails,
    stakingProviderDetails: (state) => state.stakingDetails,
    loadStatsValid: (state) => state.loadStatsValid,
    loadStatsProvider: (state) => state.loadStatsProvider,
    loadStatsValidDetails: (state) => state.loadStatsValidDetails,
  },
  mutations: {
    setStats(state, item) {
      state.stats = item;
    },
    setValidators(state, validators) {
      state.validators = validators.items;
      state.totalItems = validators.count;
    },
    setValidatorsMap(state, items) {
      state.validatorsMap = items;
    },
    setStakingProviders(state, items) {
      state.stakingProviders = items.items;
      state.totalItems = items.count;
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
    setNodes(state, nodes) {
      state.nodes = nodes.items;
      state.totalItems = nodes.count;
    },
    setValidatorStats(state, stats) {
      state.validatorsDetails = stats;
    },
    setStakingDetails(state, item) {
      state.stakingDetails = item;
    },
    setLoadStatsValid(state, bool) {
      state.loadStatsValid = bool;
    },
    setLoadStatsProvider(state, bool) {
      state.loadStatsProvider = bool;
    },
    setLoadStatsValidDetails(state, bool) {
      state.loadStatsValidDetails = bool;
    },
  },
  actions: {
    async fetchStatsValidators({ commit }) {
      try {
        commit('setLoadStatsValid', true);
        const resp = await getStatsValidators();
        commit('setStats', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadStatsValid', false);
      }
    },
    async fetchValidators({ commit }, params) {
      try {
        commit('setLoading', true);
        const validators = await getValidators({ params });
        commit('setValidators', validators.data);
      } catch (err) {
        console.log(err);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchValidatorsMap({ commit }) {
      try {
        const resp = await getValidatorsMap();
        commit('setValidatorsMap', resp.data);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchStakingProviders({ commit }, params) {
      try {
        commit('setLoading', true);
        const resp = await getStakingProviders({ params });
        commit('setStakingProviders', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchNodes({ commit }, params) {
      try {
        commit('setLoading', true);
        const resp = await getNodes({ params });
        commit('setNodes', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchValidator({ commit }, params) {
      try {
        commit('setLoadStatsValidDetails', true);
        const resp = await getValidatorStats(params);
        commit('setValidatorStats', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadStatsValidDetails', false);
      }
    },
    async fetchStakingProviderDetails({ commit }, params) {
      try {
        commit('setLoadStatsProvider', true);
        const resp = await getStakingProviderStats(params);
        commit('setStakingDetails', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadStatsProvider', false);
      }
    },
  },
};

export default validatorsService;
