<template>
  <TableCard
    :fields="fields"
    :items="transactions"
    :total-items="totalTransactionItems"
    :address="address"
    :request-name="fetchTransactions"
    :loading="loadingAcc"
  >
    <template #cell(hash)="{ item: { hash } }">
      <router-link :to="{ name: 'TransactionDetails', params: { id: hash } }">
        {{ hash | trimHash }}
      </router-link>
    </template>

    <template #cell(age)="{ item: { timestamp } }">
      <span>
        {{ timestamp | formatMsToDays }}
        {{ timestamp | formatMsToHours }}
        {{ timestamp | formatMsToMinutes }}
        {{ timestamp | formatMsToSeconds }}
      </span>
    </template>

    <template #cell(shard)="{ item: { shard_from, shard_to } }">
      {{ shard_from | formatShard }} &#8594; {{ shard_to | formatShard }}
    </template>

    <template #cell(from)="{ item: { from } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: from } }">
        {{ from | trimHashFromTo(8, -10) }}
      </router-link>
    </template>

    <template #cell(status)="{ item: { to } }">
      <img v-if="to === address" src="~@/assets/img/statusIn.svg" alt="In" />

      <img v-else src="~@/assets/img/statusOut.svg" alt="Out" />
    </template>

    <template #cell(to)="{ item: { to } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: to } }">
        {{ to | trimHashFromTo(8, -10) }}
      </router-link>
    </template>

    <template #cell(valueEGLD)="{ item: { value } }">
      {{ value | formatAmount }}
    </template>

    <template #cell(valueUSD)="{ item: { value } }">
      {{ value | formatAmount }}
    </template>
  </TableCard>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AccountTransactionsList',
  components: { TableCard },
  computed: {
    ...mapGetters(['transactions', 'totalTransactionItems', 'loadingAcc']),
    fields() {
      return tableFields.accountsTransactionsFields;
    },
    address() {
      return this.$route.params.id;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchTransactions({ address: this.address });
      },
    },
  },
  methods: {
    ...mapActions(['fetchTransactions']),
  },
};
</script>

<style scoped></style>
