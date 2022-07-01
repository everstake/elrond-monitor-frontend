import Vue from 'vue';
import VueRouter from 'vue-router';

// views
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('../views/Accounts.vue'),
  },
  {
    path: '/account/:id',
    name: 'AccountDetails',
    component: () => import('../views/AccountDetails.vue'),
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import('../views/Transactions.vue'),
  },
  {
    path: '/transaction/:id',
    name: 'TransactionDetails',
    component: () => import('../views/TransactionDetails.vue'),
  },
  {
    path: '',
    component: () => import('../views/Validators.vue'),
    children: [
      {
        path: 'validators',
        name: 'Validators',
        component: () => import('../components/validators/ValidatorsTable.vue'),
      },
      {
        path: 'validator/:identity',
        name: 'ValidatorsDetails',
        component: () =>
          import(
            '../components/validators/validators-details/ValidatorsDetails.vue'
          ),
      },
      {
        path: 'staking-providers',
        name: 'Staking-providers',
        component: () =>
          import('../components/validators/StakingProviders.vue'),
      },
      {
        path: 'staking-providers/:provider',
        name: 'StakingProviderDetails',
        component: () =>
          import(
            '../components/validators/staking-provider-details/StakingProviderDetails.vue'
          ),
      },
      {
        path: 'nodes',
        name: 'Nodes',
        component: () => import('../components/validators/Nodes.vue'),
      },
      {
        path: 'ranking',
        name: 'Ranking',
        component: () => import('../components/validators/Ranking.vue'),
      },
    ],
  },
  {
    path: '/blocks',
    name: 'Blocks',
    component: () => import('../views/Blocks.vue'),
  },
  {
    path: '/block/:id',
    name: 'BlockDetails',
    component: () => import('../views/BlockDetails.vue'),
  },
  {
    path: '/miniblock/:id',
    name: 'MiniblockDetails',
    component: () => import('../views/MiniblockDetails.vue'),
  },
  {
    path: '/epoch',
    name: 'Epoch',
    component: () => import('../views/Epoch.vue'),
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../views/Calculator.vue'),
  },
  {
    path: '/tokens',
    name: 'Tokens',
    component: () => import('../views/Tokens.vue'),
  },
  {
    path: '/token/:id',
    name: 'TokenDetails',
    component: () => import('../views/TokenDetails.vue'),
  },
  {
    path: '/collections',
    name: 'NftCollections',
    component: () => import('../views/NFTS.vue'),
  },
  {
    path: '/collection/:id',
    name: 'NftCollection',
    component: () => import('../views/NFTCollection.vue'),
  },
  {
    path: '/nfts/:id',
    name: 'NftDetails',
    component: () => import('../views/NFTDetails.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 }),
});

export default router;
