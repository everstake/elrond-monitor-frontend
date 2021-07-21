import Vue from 'vue';
import Vuex from 'vuex';
import layoutService from './modules/layoutService';
import accountService from './modules/accountService';

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
  },
});
