<template>
  <TableCard
    :items="accounts"
    :fields="fields"
    :total-items="totalItemsAccount"
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
      {{ balance | formatAmount }}
    </template>

    <template #cell(stake)="{ item: { delegated } }">
      {{ delegated }}
    </template>

    <template #cell(unstake)="{ item: { undelegated } }">
      {{ undelegated }}
    </template>
  </TableCard>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';

export default {
  name: 'AccountsList',
  components: {
    TableCard,
  },
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
