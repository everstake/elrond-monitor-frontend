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
    setBlocks(state, items) {
      state.blocks = items;
    },
    setTotalBlocks(state, val) {
      state.totalBlocks = val;
    },
    setBlock(state, item) {
      state.block = item;
    },
    setLoad(state, bol) {
      state.loading = bol;
    },
  },
  actions: {
    async fetchBlocks({ commit }, params) {
      try {
        const resp = await getBlocks({ params });
        commit('setBlocks', resp.data.items);
        commit('setTotalBlocks', resp.data.count);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchBlock({ commit }, hash) {
      try {
        commit('setLoad', true);
        const resp = await getBlock(hash);
        commit('setBlock', resp.data);
      } catch (e) {
        console.err(e);
      } finally {
        commit('setLoad', false);
      }
    },
    async fetchBlockNonce({ commit }, params) {
      try {
        commit('setLoad', true);
        const resp = await getBlockNonce(params);
        commit('setBlock', resp.data);
      } catch (e) {
        handlerError(e);
      } finally {
        commit('setLoad', false);
      }
    },
  },
};

export default blocksService;
