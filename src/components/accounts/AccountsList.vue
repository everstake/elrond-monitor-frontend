<template>
  <CommonTable
    :items="accounts"
    :fields="fields"
    :total-items="$_totalRows(totalItemsAccount)"
    :request-name="fetchAccounts"
    :loading="loadingAcc"
  >
    <template #header> Accounts </template>

    <template #cell(address)="{ item: { address } }">
      <p class="table__address ellipsis">
        <router-link :to="{ name: 'AccountDetails', params: { id: address } }">
          {{ address }}
        </router-link>
      </p>
    </template>

    <template #cell(balance)="{ item: { balance } }">
      {{ balance | formatToken }}
    </template>

    <template #cell(stake)="{ item: { delegated } }">
      {{ delegated }}
    </template>

    <template #cell(unstake)="{ item: { undelegated } }">
      {{ undelegated }}
    </template>
  </CommonTable>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CommonTable from '@/components/CommonTable.vue';
import { tableFields } from '@/constants/tables';
import pagination from '../../mixins/pagination';

export default {
  name: 'AccountsList',
  components: {
    CommonTable,
  },
  mixins: [pagination],
  computed: {
    ...mapGetters(['accounts', 'totalItemsAccount', 'loadingAcc']),
    fields() {
      return tableFields.accountFields;
    },
  },
  methods: {
    ...mapActions(['fetchAccounts']),
  },
};
</script>

<style scoped>
.ellipsis {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
