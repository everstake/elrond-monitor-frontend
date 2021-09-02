<template>
  <section class="validator-details__wrapper">
    <div>
      <b-button variant="outline-primary" to="/validators">
        <b-icon icon="arrow-left" />
      </b-button>
    </div>

    <ValidatorDetailsCard />

    <ValidatorDetailsTable />
  </section>
</template>

<script>
import ValidatorDetailsCard from './validators-details/ValidatorDetailsCard.vue';
import ValidatorDetailsTable from './validators-details/ValidatorDetailsTable.vue';

export default {
  name: 'ValidatorsDetails',
  components: { ValidatorDetailsTable, ValidatorDetailsCard },
};
</script>

<style lang="scss" scoped>
.validator-details__wrapper {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
</style>
