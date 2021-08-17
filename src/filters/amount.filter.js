import Vue from 'vue';
import numeral from 'numeral';

const formatAmount = (value) => {
  if (value === 0) {
    return '0';
  }

  return numeral(value).format('0,0.[00000]');
};

const formatUSD = (value) => {
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

Vue.filter('formatUSD', formatUSD);
Vue.filter('formatToken', formatToken);
Vue.filter('formatAmount', formatAmount);

export { formatUSD, formatToken };
