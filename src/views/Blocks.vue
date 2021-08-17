<template>
  <div class="container-lg">
    <BlocksList />
  </div>
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
