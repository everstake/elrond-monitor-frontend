import { getValidators, getValidatorsMap } from '../../api/services';

const validatorsService = {
  state: {
    validators: [],
    stakingProviders: [],
    nodes: [],
    ranking: [],
    validatorsMap: [],
  },
  getters: {
    validators: (state) => state.validators,
    stakingProviders: (state) => state.stakingProviders,
    nodes: (state) => state.nodes,
    validatorsMap: (state) => state.validatorsMap,
  },
  mutations: {
    fetchValidators(state, validators) {
      state.validators = validators.validators;
      state.stakingProviders = validators.stakingProviders;
      state.nodes = validators.nodes;
    },
    setValidatorsMap(state, items) {
      state.validatorsMap = items;
    },
  },
  actions: {
    async fetchValidators({ commit }) {
      try {
        const validators = await getValidators();
        commit('fetchValidators', validators);
      } catch (err) {
        console.log(err);
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
  },
};

export default validatorsService;
