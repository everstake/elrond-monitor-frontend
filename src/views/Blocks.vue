<template>
  <b-container>
    <BlocksList />
  </b-container>
</template>

<script>
import BlocksList from '@/components/blocks/BlocksList.vue';

export default {
  name: 'Blocks',
  components: {
    BlocksList,
  },
};
</script>
