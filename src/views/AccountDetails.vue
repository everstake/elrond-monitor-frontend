<template>
  <div class="account-details">
    <AccountCard :address="address" />

    <TableCard
      :fields="fields"
      :items="transactionsAccount"
      :total-items="totalTransactionAccount"
    >
      <template #cell(hash)="{ item: { hash } }">
        {{ hash | trimHash }}
      </template>

      <template #cell(age)="{ item: { timestamp } }">
        {{ timestamp }}
      </template>

      <template #cell(shard)="{ item: { shard_from, shard_to } }">
        Shard {{ shard_from }} &#8594; Shard {{ shard_to }}
      </template>

      <template #cell(from)="{ item: { from } }">
        <router-link :to="{ name: 'AccountDetails', params: { id: from } }">
          {{ from | trimHashFromTo(8, -10) }}
        </router-link>
      </template>

      <template #cell(status)="{ item: { status } }">
        <img
          v-if="status === 'success'"
          src="~@/assets/img/statusIn.svg"
          alt="In"
        />

        <img v-else src="~@/assets/img/statusOut.svg" alt="Out" />
      </template>

      <template #cell(to)="{ item: { to } }">
        <router-link :to="{ name: 'AccountDetails', params: { id: to } }">
          {{ to | trimHashFromTo(8, -10) }}
        </router-link>
      </template>

      <template #cell(valueEGLD)="{ item: { value } }">
        {{ value | formatAmount }}
      </template>

      <template #cell(valueUSD)="{ item: { value } }">
        {{ value | formatAmount }}
      </template>
    </TableCard>
  </div>
</template>

<script>
import AccountCard from '@/components/accounts/AccountCard.vue';
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';
import { items } from '@/constants/items';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    AccountCard,
    TableCard,
  },
  computed: {
    ...mapGetters(['transactionsAccount', 'totalTransactionAccount']),
    fields() {
      return tableFields.transactionFields;
    },
    items() {
      return items.transactions;
    },
    address() {
      return this.$route.params.id;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchTransactionsAccount({ address: this.address });
      },
    },
  },
  methods: {
    ...mapActions(['fetchAccount', 'fetchTransactionsAccount']),
  },
};
</script>

<style lang="scss">
.account-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
