import Vue from 'vue';
import {
  BootstrapVue,
  ButtonPlugin,
  CardPlugin,
  IconsPlugin,
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
} from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(IconsPlugin);
Vue.component('IconsPlugin', IconsPlugin);
