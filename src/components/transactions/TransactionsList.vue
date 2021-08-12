<template>
  <TableCard
    :fields="fields"
    :items="transactions"
    :total-items="totalTransactionItems"
    :request-name="fetchTransactions"
    :loading="loadingTx"
  >
    <template #header> Transactions </template>

    <template #cell(hash)="{ item: { hash } }">
      <router-link :to="{ name: 'TransactionDetails', params: { id: hash } }">
        {{ hash | trimHash }}
      </router-link>
    </template>

    <template #cell(age)="{ item: { timestamp } }">
      <span>
        {{ timestamp | formatTime }}
      </span>
    </template>

    <template #cell(shard)="{ item: { shard_from, shard_to } }">
      {{ shard_from | formatShard }} &#8594; {{ shard_to | formatShard }}
    </template>

    <template #cell(from)="{ item: { from } }">
      {{ from | trimHash }}
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
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { mapActions, mapGetters } from 'vuex';
import { tableFields } from '@/constants/tables';

export default {
  name: 'TransactionsList',
  components: {
    TableCard,
  },
  computed: {
    ...mapGetters(['transactions', 'totalTransactionItems', 'loadingTx']),
    fields() {
      return tableFields.transactionsFields;
    },
  },
  methods: {
    ...mapActions(['fetchTransactions']),
  },
};
</script>

<style scoped></style>
