<template>
  <div class="wrapper">
    <div class="validators">
      <ValidatorsCard />
      <TableCard :items="validators" :fields="fields" />
    </div>
  </div>
</template>

<script>
import ValidatorsCard from '@/components/validators/ValidatorsCard.vue';
import TableCard from '@/components/TableCard.vue';
import { mapGetters, mapActions } from 'vuex';
import { tableFields } from '@/constants/tables';

export default {
  name: 'Validators',
  components: {
    ValidatorsCard,
    TableCard,
  },
  computed: {
    ...mapGetters(['validators', 'stakingProviders', 'nodes']),
    fields() {
      return tableFields.validatorsFields;
    },
  },
  methods: {
    ...mapActions(['fetchValidators']),
  },
  mounted() {
    this.fetchValidators();
  }
}
</script>

<style lang="scss">
.validators {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

</style>