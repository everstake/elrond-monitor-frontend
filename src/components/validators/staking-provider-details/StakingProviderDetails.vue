<template>
  <section class="details__wrapper">
    <BtnBack />

    <StakingProviderCard />

    <StakingProviderTable />
  </section>
</template>

<script>
import StakingProviderCard from './StakingProviderCard.vue';
import StakingProviderTable from './StakingProviderTable.vue';
import BtnBack from '../../BtnBack.vue';

export default {
  name: 'StakingProviderDetails',
  components: { BtnBack, StakingProviderTable, StakingProviderCard },
};
</script>

<style scoped></style>
