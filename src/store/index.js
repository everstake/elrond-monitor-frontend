import Vue from 'vue';
import Vuex from 'vuex';
import layoutService from './modules/layoutService';
import accountService from './modules/accountService';
import transactionsService from './modules/transactionsService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    layoutService,
    accountService,
    transactionsService,
  },
});
