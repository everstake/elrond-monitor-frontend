import Vue from 'vue';
import Vuex from 'vuex';
import layoutService from './modules/layoutService';
import accountService from './modules/accountService';
import transactionsService from './modules/transactionsService';
import validatorsService from './modules/validatorsService';
import blocksService from './modules/blocksService';
import statsService from './modules/statsService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layoutService,
    accountService,
    transactionsService,
    validatorsService,
    blocksService,
    statsService,
  },
});
