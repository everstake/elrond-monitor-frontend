<template>
  <div class="wrapper">
    <div class="transactions">
      <TableCard :fields="fields" :items="transactions">
        <template #header> Transactions </template>
      </TableCard>
    </div>
  </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { mapActions, mapGetters } from 'vuex';
import { tableFields } from '@/constants/tables';

export default {
  name: 'Transactions',
  components: {
    TableCard,
  },
   async mounted() {
    await this.fetchTransactions();
  },
  computed: {
    ...mapGetters(['transactions']),
    fields() {
      return tableFields.transactionFields;
    }
  },
  methods: {
    ...mapActions(['fetchTransactions']),
  },
}
</script>

<style lang="scss">

</style>