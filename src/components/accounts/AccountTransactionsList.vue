<template>
  <TableCard
    :fields="fields"
    :items="transactions"
    :total-items="totalTransactionItems"
    :request-name="fetchTransactions"
    :address="address"
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
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AccountTransactionsList',
  components: { TableCard },
  computed: {
    ...mapGetters(['transactions', 'totalTransactionItems']),
    fields() {
      return tableFields.transactionsFields;
    },
    address() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(['fetchTransactions']),
  },
};
</script>

<style scoped></style>
