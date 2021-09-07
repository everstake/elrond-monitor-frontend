<template>
  <section class="details__wrapper">

    <StakingProviderCard />

    <StakingProviderTable />
  </section>
</template>

<script>
import StakingProviderCard from './StakingProviderCard.vue';
import StakingProviderTable from './StakingProviderTable.vue';

export default {
  name: 'StakingProviderDetails',
  components: { StakingProviderTable, StakingProviderCard },
};
</script>

<style scoped></style>
