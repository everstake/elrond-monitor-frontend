<template>
  <div class="container-lg miniblock">
    <MiniblockCard />

    <MiniblockTransactions />
  </div>
</template>

<script>
import MiniblockCard from '@/components/miniblock/MiniblockCard.vue';
import MiniblockTransactions from '../components/miniblock/MiniblockTransactions.vue';

export default {
  name: 'MiniblockDetails',
  components: { MiniblockCard, MiniblockTransactions },
};
</script>

<style scoped>
.miniblock {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
