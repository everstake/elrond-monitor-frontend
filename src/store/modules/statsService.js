import { getStats } from '../../api/services';

const statsService = {
  state: {
    stats: {},
    loading: false,
  },
  getters: {
    stats: (state) => state.stats,
    loadingStatus: (state) => state.loading,
  },
  mutations: {
    setStats(state, item) {
      state.stats = item;
    },
    setLoading(state, bol) {
      state.loading = bol;
    },
  },
  actions: {
    async fetchStats({ commit }) {
      try {
        commit('setLoading', true);
        const resp = await getStats();
        commit('setStats', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

export default statsService;
