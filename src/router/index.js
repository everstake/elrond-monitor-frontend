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
    path: '/validators',
    name: 'Validators',
    component: () => import('../views/Validators.vue'),
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 }),
});

export default router;
