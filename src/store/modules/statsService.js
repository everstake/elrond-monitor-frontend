import { getStats } from '../../api/services';

const statsService = {
  state: {
    stats: {},
    loading: true,
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
        commit('setLoading', false);
        const resp = await getStats();
        commit('setStats', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', true);
      }
    },
  },
};

export default statsService;
