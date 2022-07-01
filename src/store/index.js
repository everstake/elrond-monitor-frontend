import Vue from 'vue';
import Vuex from 'vuex';
import layoutService from './modules/layoutService';
import accountService from './modules/accountService';
import transactionsService from './modules/transactionsService';
import stakingService from './modules/stakingService';
import blocksService from './modules/blocksService';
import statsService from './modules/statsService';
import chartsService from './modules/chartsService';
import tokensService from './modules/tokensService';
import nftService from './modules/nftsService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layoutService,
    accountService,
    transactionsService,
    validatorsService: stakingService,
    blocksService,
    statsService,
    chartsService,
    tokensService,
    nftService,
  },
});
