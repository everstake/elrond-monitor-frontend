import Vue from 'vue';
import numeral from 'numeral';

const formatAmount = (value) => {
  const amount = Number(value);
  if (typeof amount !== 'number') {
    return '-';
  }

  if (amount <= 1) {
    return `${amount}`;
  }

  if (amount < 1000) {
    return (amount / 1000000000)
      .toFixed(9)
      .replace(/0*$/, '');
  }

  return numeral(amount / 1000000000).format('0,0.[000000000]');
};

Vue.filter('formatAmount', formatAmount);

export default formatAmount;
