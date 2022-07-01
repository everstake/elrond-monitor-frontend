import {
  getAllNFTCollections,
  getNFTCollection,
  getNFTCollections,
  getNFTDetails,
} from '@/api/services';

const nftService = {
  state: {
    allNftCollections: [],
    nftCollection: {},
    nftCollections: [],
    nftDetails: {},
    loading: false,
    totalItemsNft: 1,
  },
  getters: {
    allNftCollections: (state) => state.allNftCollections,
    nftCollection: (state) => state.nftCollection,
    nftCollections: (state) => state.nftCollections,
    nftDetails: (state) => state.nftDetails,
    loadingNft: (state) => state.loading,
    totalItemsNft: (state) => state.totalItemsNft,
  },
  mutations: {
    setAllNftCollections(state, items) {
      state.allNftCollections = items.items;
      state.totalItemsNft = items.count;
    },
    setNftCollection(state, item) {
      state.nftCollection = item;
    },
    setNftCollections(state, items) {
      state.nftCollections = items.items;
      state.totalItemsNft = items.count;
    },
    setNftDetails(state, item) {
      state.nftDetails = item;
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    async fetchAllNftCollections({ commit }, params) {
      try {
        commit('setLoading', true);
        const resp = await getAllNFTCollections({ params });
        commit('setAllNftCollections', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchNftCollection({ commit }, identity) {
      try {
        commit('setLoading', true);
        const resp = await getNFTCollection(identity);
        commit('setNftCollection', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchNftCollections({ commit }, params) {
      try {
        commit('setLoading', true);
        const resp = await getNFTCollections({ params });
        commit('setNftCollections', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchNftDetails({ commit }, identity) {
      try {
        commit('setLoading', true);
        const resp = await getNFTDetails(identity);
        commit('setNftDetails', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

export default nftService;
