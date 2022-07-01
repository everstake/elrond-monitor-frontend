<template>
  <common-table
    :fields="fields"
    :items="nftCollections"
    :total-items="$_totalRows(totalItemsNft)"
    :fetch-params="fetchParams"
    :request-name="fetchNftCollections"
    :loading="loadingNft"
  >
    <template #cell(identity)="{ item: { identity } }">
      <router-link :to="{ name: 'NftDetails', params: { id: identity } }">{{
        identity
      }}</router-link>
    </template>

    <template #cell(creator)="{ item: { creator } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: creator } }">{{
        creator
      }}</router-link>
    </template>
  </common-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CommonTable from '../CommonTable.vue';
import pagination from '../../mixins/pagination';
import { tableFields } from '../../constants/tables';

export default {
  components: { CommonTable },
  mixins: [pagination],
  computed: {
    ...mapGetters(['loadingNft', 'nftCollections', 'totalItemsNft']),
    fields() {
      return tableFields.nftFields;
    },
    fetchParams() {
      return { collection: this.$route.params.id };
    },
  },
  methods: {
    ...mapActions(['fetchNftCollections']),
  },
};
</script>

<style></style>
