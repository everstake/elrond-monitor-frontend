import Vue from 'vue';
import numeral from 'numeral';

const formatPercent = (val) => {
  if (val === 0) {
    return '0%';
  }

  return `${numeral(val).format('0,0.[0]')}%`;
};

Vue.filter('formatPercent', formatPercent);

export default formatPercent;
