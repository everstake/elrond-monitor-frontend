import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './filters';

// Plugins
import './plugins/bootstrapVue';
import './plugins/vue-plugins';

// Style
import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
