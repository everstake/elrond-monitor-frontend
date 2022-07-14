import Vue from 'vue';
import { sliceStringFromTo } from '@/helpers/slice.string.helper';

const trimHash = (hash) => sliceStringFromTo(hash, 6, -6);
const trimHashFromTo = (hash, from = 6, to = -6) =>
  sliceStringFromTo(hash, from, to);

Vue.filter('trimHashFromTo', trimHashFromTo);
Vue.filter('trimHash', trimHash);

export { trimHash, trimHashFromTo };
