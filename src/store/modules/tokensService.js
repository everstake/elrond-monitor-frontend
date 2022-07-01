import {
  getToken,
  getTokens,
  getTokensAccounts,
  getTokensTransactions,
} from '../../api/services';

const tokensService = {
  state: {
    tokens: [],
    token: {},
    tokensAccounts: [],
    tokensTransactions: [],
    totalItemsTokens: 1,
    loading: false,
    loadingAccAndTxn: false,
    decimals: 0,
    typeToken: '',
  },
  getters: {
    tokens: (state) => state.tokens,
    token: (state) => state.token,
    tokensAccounts: (state) => state.tokensAccounts,
    tokensTransactions: (state) => state.tokensTransactions,
    totalItemsTokens: (state) => state.totalItemsTokens,
    loadingTokens: (state) => state.loading,
    loadingAccAndTxn: (state) => state.loadingAccAndTxn,
    decimals: (state) => state.decimals,
    typeToken: (state) => state.typeToken,
  },
  mutations: {
    setTokens(state, tokens) {
      state.tokens = tokens.items;
      state.totalItemsTokens = tokens.count;
    },
    setToken(state, token) {
      state.token = token;
      state.decimals = token.decimals;
      state.typeToken = token.identity;
    },
    setTokensAccounts(state, items) {
      state.tokensAccounts = items.items;
      state.totalItemsTokens = items.count;
    },
    setTokensTransactions(state, items) {
      state.tokensTransactions = items.items;
      state.totalItemsTokens = items.count;
    },
    setLoadingAccAndTxn(state, bool) {
      state.loadingAccAndTxn = bool;
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    async fetchTokens({ commit }, params) {
      try {
        commit('setLoading', true);
        const resp = await getTokens({ params });
        commit('setTokens', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchToken({ commit }, identity) {
      try {
        commit('setLoading', true);
        const resp = await getToken(identity);
        commit('setToken', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchTokensAccounts({ commit }, params) {
      try {
        commit('setLoadingAccAndTxn', true);
        const resp = await getTokensAccounts({ params });
        commit('setTokensAccounts', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingAccAndTxn', false);
      }
    },
    async fetchTokensTransactions({ commit }, params) {
      try {
        commit('setLoadingAccAndTxn', true);
        const resp = await getTokensTransactions({ params });
        commit('setTokensTransactions', resp.data);
      } catch (e) {
        console.error(e);
      } finally {
        commit('setLoadingAccAndTxn', false);
      }
    },
  },
};

export default tokensService;
