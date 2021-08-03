<template>
  <div class="wrapper">
    <div class="transactions">
      <TableCard
        :fields="fields"
        :items="transactions"
        :total-items="totalTransactionItems"
        :request-name="fetchTransactions"
      >
        <template #header> Transactions </template>

        <template #cell(hash)="{ item: { hash } }">
          {{ hash | trimHash }}
        </template>

        <template #cell(age)="{ item: { timestamp } }">
          {{ timestamp }}
        </template>

        <template #cell(shard)="{ item: { shard_from, shard_to } }">
          Shard {{ shard_from }} &#8594; Shard {{ shard_to }}
        </template>

        <template #cell(from)="{ item: { from } }">
          {{ from | trimHash }}
        </template>

        <template #cell(status)="{ item: { status } }">
          <img
            v-if="status === 'success'"
            src="~@/assets/img/statusIn.svg"
            alt="In"
          />

          <img v-else src="~@/assets/img/statusOut.svg" alt="Out" />
        </template>

        <template #cell(to)="{ item: { to } }">
          {{ to | trimHash }}
        </template>

        <template #cell(valueEGLD)="{ item: { value } }">
          {{ value }}
        </template>

        <template #cell(valueUSD)="{ item: { value } }">
          {{ value }}
        </template>
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
  computed: {
    ...mapGetters(['transactions', 'totalTransactionItems']),
    fields() {
      return tableFields.transactionFields;
    },
  },
  methods: {
    ...mapActions(['fetchTransactions']),
  },
};
</script>

<style lang="scss"></style>
