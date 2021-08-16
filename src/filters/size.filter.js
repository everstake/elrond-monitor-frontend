import Vue from 'vue';
import numeral from 'numeral';

const formatSize = (val) => {
  if (val === 0) {
    return `0 kB`;
  }

  return `${numeral(val / 1000).format('0.[000]')} kB`;
}

Vue.filter('formatSize', formatSize);

export default formatSize;
