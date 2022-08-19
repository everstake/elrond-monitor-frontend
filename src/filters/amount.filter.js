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
  return `${numeral(val).format('0,0.[000000]')} EGLD`;
};

const fromatTokenWithDecimals = (val, decimals) => {
  if (+val === 0 || decimals === 0) {
    return '';
  }

  const dec = +val / 10 ** decimals;

  if (dec < 0.000001) {
    return '0';
  }

  return formatAmount(dec);
};

Vue.filter('formatUSD', formatUSD);
Vue.filter('formatToken', formatToken);
Vue.filter('formatAmount', formatAmount);
Vue.filter('fromatTokenWithDecimals', fromatTokenWithDecimals);

export { formatUSD, formatToken, fromatTokenWithDecimals };
