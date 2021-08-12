import Vue from 'vue';
import {
  BootstrapVue,
  IconsPlugin,
  CardPlugin,
  ButtonPlugin,
  ToastPlugin,
  SpinnerPlugin,
  BIcon,
  BIconChevronRight,
  BIconChevronLeft,
  CollapsePlugin,
} from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin);
Vue.use(ToastPlugin);
Vue.use(SpinnerPlugin);
Vue.use(CollapsePlugin);
Vue.component('BIcon', BIcon);
Vue.component('BIconChevronRight', BIconChevronRight);
Vue.component('BIconChevronLeft', BIconChevronLeft);
