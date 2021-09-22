<template>
  <CommonTable
    :fields="fields"
    :items="transactions"
    :total-items="$_totalRows(totalTransactionItems)"
    :fetch-params="fetchParams"
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
        v-if="from !== fetchParams.address"
        :to="{ name: 'AccountDetails', params: { id: from } }"
      >
        {{ from | trimHashFromTo(8, -10) }}
      </router-link>

      <span v-else>{{ from | trimHashFromTo(8, -10) }}</span>
    </template>

    <template #cell(status)="{ item: { to } }">
      <img
        v-if="to === fetchParams.address"
        src="~@/assets/img/statusIn.svg"
        alt="In"
      />

      <img v-else src="~@/assets/img/statusOut.svg" alt="Out" />
    </template>

    <template #cell(to)="{ item: { to } }">
      <router-link
        v-if="to !== fetchParams.address"
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
  </CommonTable>
</template>

<script>
import CommonTable from '@/components/CommonTable.vue';
import { tableFields } from '@/constants/tables';
import { mapActions, mapGetters } from 'vuex';
import exchangeTokenForUSD from '../../../mixins/exchangeTokenForUSD';
import pagination from '../../../mixins/pagination';

export default {
  name: 'AccountTransactionsList',
  components: { CommonTable },
  mixins: [exchangeTokenForUSD, pagination],
  computed: {
    ...mapGetters(['transactions', 'totalTransactionItems', 'loadingTx']),
    fields() {
      return tableFields.accountsTransactionsFields;
    },
    fetchParams() {
      return { address: this.$route.params.id };
    },
  },
  methods: {
    ...mapActions(['fetchTransactions']),
  },
};
</script>

<style scoped></style>
