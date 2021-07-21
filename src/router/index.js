import Vue from 'vue';
import VueRouter from 'vue-router';

// views
import Home from '../views/Home.vue';
import Accounts from '../views/Accounts.vue';
import AccountDetails from '../views/AccountDetails.vue';

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
    path: '/account-details',
    name: 'AccountDetails',
    component: AccountDetails,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
