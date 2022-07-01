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
  TablePlugin,
  TooltipPlugin,
  BIconBox,
} from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CardPlugin);
Vue.use(ButtonPlugin);
Vue.use(ToastPlugin);
Vue.use(SpinnerPlugin);
Vue.use(CollapsePlugin);
Vue.use(TablePlugin);
Vue.use(TooltipPlugin);
Vue.component('BIcon', BIcon);
Vue.component('BIconBox', BIconBox);
Vue.component('BIconChevronRight', BIconChevronRight);
Vue.component('BIconChevronLeft', BIconChevronLeft);
