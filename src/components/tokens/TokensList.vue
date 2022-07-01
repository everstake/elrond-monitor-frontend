<template>
  <common-table
    :items="tokens"
    :fields="fields"
    :request-name="fetchTokens"
    :total-items="$_totalRows(totalItemsTokens)"
    :loading="loadingTokens"
  >
    <template #header>Tokens</template>

    <template #cell(name)="{ item: { name, identity } }">
      <router-link :to="{ name: 'TokenDetails', params: { id: identity } }">{{
        name
      }}</router-link>
    </template>

    <template #cell(properties)="{ item: { properties } }">{{
      properties.name
    }}</template>

    <template #cell(owner)="{ item: { owner } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: owner } }">
        {{ owner | trimHashFromTo(10, -10) }}
      </router-link>
    </template>
  </common-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { tableFields } from '@/constants/tables';
import CommonTable from '../CommonTable.vue';
import pagination from '../../mixins/pagination';

export default {
  name: 'TokensList',
  components: { CommonTable },
  mixins: [pagination],
  computed: {
    ...mapGetters(['tokens', 'totalItemsTokens', 'loadingTokens']),
    fields() {
      return tableFields.tokensFields;
    },
  },
  methods: {
    ...mapActions(['fetchTokens']),
  },
};
</script>

<style></style>
