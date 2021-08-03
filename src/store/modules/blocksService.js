import { getBlock, getBlocks } from '../../api/services';

const blocksService = {
  state: {
    blocks: [],
    totalBlocks: 1,
    block: {},
  },
  getters: {
    blocks: (state) => state.blocks,
    totalBlocks: (state) => state.totalBlocks,
    block: (state) => state.block,
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
        const resp = await getBlock(hash);
        commit('fetchBlock', resp.data);
      } catch (e) {
        console.err(e);
      }
    },
  },
};

export default blocksService;
