import Vue from 'vue';
import numeral from 'numeral';

const formatAmount = (value) => {
  if (!value) {
    return '$0';
  }

  return `$${numeral(value).format('0,0.[00]')}`;
};

const formatToken = (val) => {
  if (!Number(val)) {
    return '0 EGLD';
  }
  return `${numeral(val).format('0,0.[0000000]')} EGLD`;
};

Vue.filter('formatAmount', formatAmount);
Vue.filter('formatToken', formatToken);

export { formatAmount, formatToken };
