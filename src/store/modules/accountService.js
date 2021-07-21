import { getAccounts } from '@/api/accountsService';

const accountService = {
  state: {
    accounts: [],
  },
  mutations: {
    fetchAccounts({ state }, accounts) {
      state.accounts = accounts;
    },
  },
  actions: {
    async fetchAccounts({ commit }) {
      try {
        const accounts = await getAccounts();
        commit('fetchAccounts', accounts);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    accounts: (state) => state.accounts,
  },
};

export default accountService;
