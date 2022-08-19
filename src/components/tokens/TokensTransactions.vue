<template>
  <common-table
    :fields="fields"
    :items="tokensTransactions"
    :fetch-params="fetchParams"
    :request-name="fetchTokensTransactions"
    :total-items="$_totalRows(totalItemsTokens)"
    :loading="loadingAccAndTxn"
  >
    <template #cell(original_tx_hash)="{ item: { original_tx_hash } }">
      <router-link
        :to="{ name: 'TransactionDetails', params: { id: original_tx_hash } }"
      >
        {{ original_tx_hash | trimHashFromTo }}
      </router-link>
    </template>

    <template #cell(timestamp)="{ item: { timestamp } }">{{
      timestamp | formatTime
    }}</template>

    <template #cell(shard)="{ item: { sender_shard, receiver_shard } }">
      {{ sender_shard | formatShard }} &#8594;
      {{ receiver_shard | formatShard }}
    </template>

    <template #cell(sender)="{ item: { sender } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: sender } }">
        {{ sender | trimHashFromTo }}
      </router-link>
    </template>

    <template #cell(receiver)="{ item: { receiver } }">
      <router-link :to="{ name: 'AccountDetails', params: { id: receiver } }">
        {{ receiver | trimHashFromTo }}
      </router-link>
    </template>

    <template
      #cell(esdt_values)="{
        item: { esdt_values, tokens, tokens_details },
        index,
      }"
    >
      <div>
        <span
          >{{
            esdt_values[tokens.indexOf(typeToken)]
              | fromatTokenWithDecimals(decimals)
          }}
          {{ tokens[tokens.indexOf(typeToken)] | splitTokenName }}</span
        >

        <b-icon-box
          v-if="esdt_values.length > 1"
          :id="`tooltip-target-${index}`"
          :class="'icon-box'"
        />

        <b-tooltip
          v-if="tokens_details.length > 1"
          :target="`tooltip-target-${index}`"
          triggers="hover"
          placement="left"
        >
          <div v-for="(item, i) in tokens_details" :key="i">
            {{ item.value | fromatTokenWithDecimals(item.decimal) }}
            {{ item.name | splitTokenName }}
          </div>
        </b-tooltip>
      </div>
    </template>
  </common-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { tableFields } from '../../constants/tables';
import CommonTable from '../CommonTable.vue';
import pagination from '../../mixins/pagination';

export default {
  components: { CommonTable },
  mixins: [pagination],
  computed: {
    ...mapGetters([
      'tokensTransactions',
      'totalItemsTokens',
      'loadingAccAndTxn',
      'decimals',
      'typeToken',
    ]),
    fields() {
      return tableFields.tokensTransactionsFields;
    },
    fetchParams() {
      return { token: this.$route.params.id };
    },
  },
  methods: {
    ...mapActions(['fetchTokensTransactions']),
  },
};
</script>

<style lang="scss" scoped>
.icon-box {
  margin-left: 0.3rem;
  color: $blue;
}
</style>
