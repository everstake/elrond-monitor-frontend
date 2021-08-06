import { getValidators } from "../../api/services";

const validatorsService = {
  state: {
    validators: [],
    stakingProviders: [],
    nodes: [],
    ranking: [],
  },
  mutations: {
    fetchValidators(state, validators) {
      state.validators = validators.validators;
      state.stakingProviders = validators.stakingProviders;
      state.nodes = validators.nodes;
    },
  },
  actions: {
    async fetchValidators({ commit }) {
      try {
        const validators = await getValidators();
        commit('fetchValidators', validators)
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    validators: (state) => state.validators,
    stakingProviders: (state) => state.stakingProviders,
    nodes: (state) => state.nodes,
  },
}

export default validatorsService;
