import Vue from 'vue';
import {
  BootstrapVue,
  IconsPlugin,
  CardPlugin,
  ButtonPlugin,
  ToastPlugin,
  BIcon,
  BIconChevronRight,
  BIconChevronLeft,
} from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin);
Vue.use(ToastPlugin);
Vue.component('BIcon', BIcon);
Vue.component('BIconChevronRight', BIconChevronRight);
Vue.component('BIconChevronLeft', BIconChevronLeft);
