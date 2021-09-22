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
    setLoaderStats(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    async fetchStats({ commit }) {
      try {
        commit('setLoaderStats', true);
        const resp = await getStats();
        commit('setStats', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoaderStats', false);
      }
    },
  },
};

export default statsService;
