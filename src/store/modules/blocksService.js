import {
  getBlock,
  getBlockNonce,
  getBlocks,
  getMiniblock,
} from '../../api/services';
import { handlerError } from '../../helpers/errorsHandler';

const blocksService = {
  state: {
    blocks: [],
    totalBlocks: 1,
    block: {},
    loading: false,
    miniblock: {},
  },
  getters: {
    blocks: (state) => state.blocks,
    totalBlocks: (state) => state.totalBlocks,
    block: (state) => state.block,
    loadingBlock: (state) => state.loading,
    miniblock: (state) => state.miniblock,
  },
  mutations: {
    setBlocks(state, items) {
      state.blocks = items.items;
      state.totalBlocks = items.count;
    },
    setBlock(state, item) {
      state.block = item;
    },
    setLoaderBlocks(state, bool) {
      state.loading = bool;
    },
    setMiniblock(state, item) {
      state.miniblock = item;
    },
  },
  actions: {
    async fetchBlocks({ commit }, params) {
      try {
        commit('setLoaderBlocks', true);

        const resp = await getBlocks({ params });
        commit('setBlocks', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoaderBlocks', false);
      }
    },
    async fetchBlock({ commit }, hash) {
      try {
        commit('setLoaderBlocks', true);
        const resp = await getBlock(hash);
        commit('setBlock', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoaderBlocks', false);
      }
    },
    async fetchBlockNonce({ commit }, params) {
      try {
        commit('setLoaderBlocks', true);
        const resp = await getBlockNonce(params);
        commit('setBlock', resp.data);
      } catch (e) {
        handlerError(e);
      } finally {
        commit('setLoaderBlocks', false);
      }
    },
    async fetchMiniblock({ commit }, hash) {
      try {
        commit('setLoaderBlocks', true);
        const resp = await getMiniblock(hash);
        commit('setMiniblock', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoaderBlocks', false);
      }
    },
  },
};

export default blocksService;
