<template>
  <CommonTable
    :fields="fields"
    :items="transactions"
    :total-items="$_totalRows(totalTransactionItems)"
    :request-name="fetchTransactions"
    :loading="loadingTx"
    :request-web-socket="fetchWebSocketTx"
    :socket-send-params="socketSendParams"
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

    <template #cell(fee)="{ item: { fee } }">
      {{ fee | formatToken }}
    </template>

    <template #cell(shard)="{ item: { shard_from, shard_to } }">
      {{ shard_from | formatShard }} &#8594; {{ shard_to | formatShard }}
    </template>

    <template #cell(from)="{ item: { from } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: from } }">
        {{ from | trimHash }}
      </router-link>
    </template>

    <template #cell(to)="{ item: { to } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: to } }">
        {{ to | trimHash }}
      </router-link>
    </template>

    <template #cell(valueEGLD)="{ item: { value } }">
      {{ value | formatToken }}
    </template>

    <template #cell(valueUSD)="{ item: { value } }">
      {{ $_exchange(value) | formatUSD }}
    </template>
  </CommonTable>
</template>

<script>
import CommonTable from '@/components/CommonTable.vue';
import { mapActions, mapGetters } from 'vuex';
import { tableFields } from '@/constants/tables';
import pagination from '../../mixins/pagination';
import exchangeTokenForUSD from '../../mixins/exchangeTokenForUSD';

export default {
  name: 'TransactionsList',
  components: {
    CommonTable,
  },
  mixins: [exchangeTokenForUSD, pagination],
  computed: {
    ...mapGetters(['transactions', 'totalTransactionItems', 'loadingTx']),
    fields() {
      return tableFields.transactionsFields;
    },
    socketSendParams() {
      return { type: 'subscribe', channel: 'transactions' };
    },
  },
  methods: {
    ...mapActions(['fetchTransactions', 'fetchWebSocketTx']),
  },
};
</script>

<style scoped></style>
