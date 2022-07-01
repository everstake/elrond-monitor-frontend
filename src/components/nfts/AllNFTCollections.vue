<template>
  <common-table
    :items="allNftCollections"
    :fields="fields"
    :request-name="fetchAllNftCollections"
    :total-items="$_totalRows(totalItemsNft)"
    :loading="loadingNft"
  >
    <template #header>NFT Collections</template>

    <template #cell(identity)="{ item: { identity } }">
      <router-link :to="{ name: 'NftCollection', params: { id: identity } }">
        {{ identity }}
      </router-link>
    </template>

    <template #cell(created_at)="{ item: { created_at } }">{{
      created_at | formatTime
    }}</template>

    <template #cell(owner)="{ item: { owner } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: owner } }">
        {{ owner | trimHashFromTo(10, -10) }}
      </router-link>
    </template>
  </common-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import pagination from '../../mixins/pagination';
import CommonTable from '../CommonTable.vue';
import { tableFields } from '../../constants/tables';

export default {
  components: { CommonTable },
  mixins: [pagination],
  computed: {
    ...mapGetters(['allNftCollections', 'totalItemsNft', 'loadingNft']),
    fields() {
      return tableFields.allNftFields;
    },
  },
  methods: {
    ...mapActions(['fetchAllNftCollections']),
  },
};
</script>

<style></style>
