<template>
  <section class="details__wrapper">
    <ValidatorDetailsCard />

    <ValidatorDetailsTable />
  </section>
</template>

<script>
import ValidatorDetailsCard from './ValidatorDetailsCard.vue';
import ValidatorDetailsTable from './ValidatorDetailsTable.vue';

export default {
  name: 'ValidatorsDetails',
  components: { ValidatorDetailsTable, ValidatorDetailsCard },
};
</script>

<style lang="scss">
</style>
