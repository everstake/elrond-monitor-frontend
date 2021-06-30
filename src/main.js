import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Plugins
import './plugins/bootstrapVue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';

// import custom styles
import '@/assets/scss/main.scss';

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
