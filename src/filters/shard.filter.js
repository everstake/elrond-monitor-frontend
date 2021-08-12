import Vue from 'vue';

const formatShard = (val) => {
  if (val === 4294967295) {
    return 'Metachain';
  }

  return `Shard ${val}`;
};

Vue.filter('formatShard', formatShard);

export default formatShard;
