import Vue from 'vue';

const splitWord = (elem) => {
  return elem.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toUpperCase();
};

const splitTokenName = (str) => {
  return str.split('-')[0];
};

Vue.filter('splitWord', splitWord);
Vue.filter('splitTokenName', splitTokenName);

export { splitWord, splitTokenName };
