import { getBlock, getBlockNonce, getBlocks } from '../../api/services';
import { handlerError } from '../../helpers/errorsHandler';

const blocksService = {
  state: {
    blocks: [],
    totalBlocks: 1,
    block: {},
    loading: false,
  },
  getters: {
    blocks: (state) => state.blocks,
    totalBlocks: (state) => state.totalBlocks,
    block: (state) => state.block,
    loading: (state) => state.loading,
  },
  mutations: {
    fetchBlocks(state, items) {
      state.blocks = items;
    },
    fetchTotalBlocks(state, val) {
      state.totalBlocks = val;
    },
    fetchBlock(state, item) {
      state.block = item;
    },
    load(state, bol) {
      state.loading = bol;
    },
  },
  actions: {
    async fetchBlocks({ commit }, params) {
      try {
        const resp = await getBlocks({ params });
        commit('fetchBlocks', resp.data.items);
        commit('fetchTotalBlocks', resp.data.count);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchBlock({ commit }, hash) {
      try {
        commit('load', true);
        const resp = await getBlock(hash);
        commit('fetchBlock', resp.data);
      } catch (e) {
        console.err(e);
      } finally {
        commit('load', false);
      }
    },
    async fetchBlockNonce({ commit }, params) {
      try {
        commit('load', true);
        const resp = await getBlockNonce(params);
        commit('fetchBlock', resp.data);
      } catch (e) {
        handlerError(e);
      } finally {
        commit('load', false);
      }
    },
  },
};

export default blocksService;
