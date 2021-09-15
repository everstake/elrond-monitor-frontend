<template>
  <TableCard
    :fields="fields"
    :items="transactions"
    :total-items="$_totalRows(totalTransactionItems)"
    :address="address"
    :request-name="fetchTransactions"
    :loading="loadingTx"
  >
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
      <router-link
        v-if="from !== address.address"
        :to="{ name: 'AccountDetails', params: { id: from } }"
      >
        {{ from | trimHashFromTo(8, -10) }}
      </router-link>

      <span v-else>{{ from | trimHashFromTo(8, -10) }}</span>
    </template>

    <template #cell(status)="{ item: { to } }">
      <img v-if="to === address.address" src="~@/assets/img/statusIn.svg" alt="In" />

      <img v-else src="~@/assets/img/statusOut.svg" alt="Out" />
    </template>

    <template #cell(to)="{ item: { to } }">
      <router-link
        v-if="to !== address.address"
        :to="{ name: 'AccountDetails', params: { id: to } }"
      >
        {{ to | trimHashFromTo(8, -10) }}
      </router-link>

      <span v-else> {{ to | trimHashFromTo(8, -10) }} </span>
    </template>

    <template #cell(valueEGLD)="{ item: { value } }">
      {{ value | formatToken }}
    </template>

    <template #cell(valueUSD)="{ item: { value } }">
      {{ $_exchange(value) | formatUSD }}
    </template>
  </TableCard>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';
import { mapActions, mapGetters } from 'vuex';
import exchangeTokenForUSD from '../../../mixins/exchangeTokenForUSD';
import pagination from '../../../mixins/pagination';

export default {
  name: 'AccountTransactionsList',
  components: { TableCard },
  mixins: [exchangeTokenForUSD, pagination],
  computed: {
    ...mapGetters(['transactions', 'totalTransactionItems', 'loadingTx']),
    fields() {
      return tableFields.accountsTransactionsFields;
    },
    address() {
      return { address: this.$route.params.id };
    },
  },
  methods: {
    ...mapActions(['fetchTransactions']),
  },
};
</script>

<style scoped></style>
