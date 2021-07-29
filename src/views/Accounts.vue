<template>
  <div class="accounts wrapper">
    <TableCard
      :items="accounts"
      :fields="fields"
      :total-items="totalItemsAccount"
      @changedPage="pagination"
    >
      <template #header> Accounts </template>

      <template #cell(address)="{ item: { address } }">
        <p class="table__address ellipsis">
          <router-link
            :to="{ name: 'AccountDetails', params: { id: address } }"
          >
            {{ address }}
          </router-link>
        </p>
      </template>

      <template #cell(balance)="{ item: { balance } }">
        {{ balance }}
      </template>

      <template #cell(stake)="{ item: { delegated } }">
        {{ delegated }}
      </template>

      <template #cell(unstake)="{ item: { undelegated } }">
        {{ undelegated }}
      </template>
    </TableCard>
  </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { mapGetters, mapActions } from 'vuex';
import { tableFields } from '@/constants/tables';

export default {
  name: 'Accounts',
  components: {
    TableCard,
  },
  computed: {
    ...mapGetters(['accounts', 'totalItemsAccount']),
    fields() {
      return tableFields.accountFields;
    },
  },
  created() {
    this.fetchAccounts({
      page: 1,
      limit: 10,
    });
  },
  methods: {
    ...mapActions(['fetchAccounts']),
    pagination(e) {
      this.fetchAccounts(e);
    },
  },
};
</script>

<style lang="scss">
.ellipsis {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
