<template>
  <CommonTable
    :items="accountESDTTokens"
    :fields="fields"
    :fetch-params="fetchParams"
    :request-name="fetchAccountESDT"
    :total-items="$_totalRows(totalItemsToken)"
    :loading="loadingAccESDTTokens"
  >
    <template #cell(name)="{ item: { token } }">{{ token.name }}</template>
    <template #cell(identifier)="{ item: { token } }">{{
      token.identifier
    }}</template>

    <template #cell(balance)="{ item: { token } }">{{
      token.value | fromatTokenWithDecimals(token.decimal)
    }}</template>
  </CommonTable>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CommonTable from '../../CommonTable.vue';
import pagination from '../../../mixins/pagination';

export default {
  name: 'AccountESDTTokens',
  components: {
    CommonTable,
  },
  mixins: [pagination],
  data() {
    return {
      fields: [
        {
          key: 'name',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'identifier',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
        {
          key: 'balance',
          class: ['table__cell'],
          thClass: ['table__title'],
          tdClass: ['table__cell--common'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'accountESDTTokens',
      'totalItemsToken',
      'loadingAccESDTTokens',
    ]),
    fetchParams() {
      return { address: this.$route.params.id };
    },
  },
  methods: {
    ...mapActions(['fetchAccountESDT']),
  },
};
</script>

<style></style>
