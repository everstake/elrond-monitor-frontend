<template>
  <common-table
    :fields="fields"
    :items="tokensAccounts"
    :request-name="fetchTokensAccounts"
    :total-items="$_totalRows(totalItemsTokens)"
    :fetch-params="fetchParams"
    :loading="loadingAccAndTxn"
  >
    <template #cell(address)="{ item: { address } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: address } }">
        {{ address | trimHashFromTo(15, -15) }}
      </router-link>
    </template>

    <template #cell(balance)="{ item: { balance } }">
      {{ balance | fromatTokenWithDecimals(decimals) }}
    </template>
  </common-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CommonTable from '../CommonTable.vue';
import pagination from '../../mixins/pagination';

export default {
  components: { CommonTable },
  mixins: [pagination],
  data() {
    return {
      fields: [
        {
          key: 'address',
          label: 'Address',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--blue'],
        },
        {
          key: 'balance',
          label: 'Balance',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--block'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'tokensAccounts',
      'loadingAccAndTxn',
      'totalItemsTokens',
      'decimals',
    ]),
    fetchParams() {
      return { token_identifier: this.$route.params.id };
    },
  },
  methods: {
    ...mapActions(['fetchTokensAccounts']),
  },
};
</script>

<style></style>
