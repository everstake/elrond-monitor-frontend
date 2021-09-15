<template>
  <div v-show="items" :class="['minibllock-table', darkModeClassBackground]">
    <b-table :fields="fields" :items="items" responsive>
      <template #cell(hash)="data">
        <router-link
          :to="{ name: 'TransactionDetails', params: { id: data.item.hash } }"
        >
          {{ data.item.hash | trimHash }}
        </router-link>
      </template>

      <template #cell(age)="data">
        {{ data.item.timestamp | formatTime }}
      </template>

      <template #cell(shard)="data">
        {{ data.item.shard_from | formatShard }} &#8594;
        {{ data.item.shard_to | formatShard }}
      </template>

      <template #cell(from)="data">
        {{ data.item.from | trimHashFromTo(8, -10) }}
      </template>

      <template #cell(to)="data">
        {{ data.item.to | trimHashFromTo(8, -10) }}
      </template>

      <template #cell(valueEGLD)="data">
        {{ data.item.value | formatToken }}
      </template>

      <template #cell(valueUSD)="data">
        {{ $_exchange(data.item.value) | formatUSD }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { tableFields } from '@/constants/tables';
import exchangeTokenForUSD from '../../mixins/exchangeTokenForUSD';
import pagination from '../../mixins/pagination';

export default {
  name: 'MiniblockTransactions',
  mixins: [exchangeTokenForUSD, pagination],
  computed: {
    ...mapGetters(['miniblock', 'loadingBlock', 'darkModeClassBackground']),
    fields() {
      return tableFields.accountsTransactionsFields;
    },
    items() {
      return this.miniblock.txs;
    },
  },
};
</script>

<style lang="scss" scoped>
.minibllock-table {
  border-radius: $border-radius-card;
  padding: 0 50px 32px;
}
</style>
