import Vue from 'vue';
import VueRouter from 'vue-router';

// views
import Home from '../views/Home.vue';
import Accounts from '../views/Accounts.vue';
import Transactions from '../views/Transactions.vue';
import Validators from '../views/Validators.vue';

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
    component: Accounts,
  },
  {
    path: '/account/:id',
    name: 'AccountDetails',
    component: () => import('../views/AccountDetails.vue'),
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions,
  },
  {
    path: '/validators',
    name: 'Validators',
    component: Validators,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
