<template>
  <section class="details__wrapper">
    <BtnBack />

    <ValidatorDetailsCard />

    <ValidatorDetailsTable />
  </section>
</template>

<script>
import ValidatorDetailsCard from './ValidatorDetailsCard.vue';
import ValidatorDetailsTable from './ValidatorDetailsTable.vue';
import BtnBack from '../../BtnBack.vue';

export default {
  name: 'ValidatorsDetails',
  components: { BtnBack, ValidatorDetailsTable, ValidatorDetailsCard },
};
</script>

<style lang="scss"></style>
