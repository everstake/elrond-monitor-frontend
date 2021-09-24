<template>
  <CommonTable
    :fields="fields"
    :items="blocks"
    :total-items="$_totalRows(totalBlocks)"
    :request-name="fetchBlocks"
    :loading="loadingBlock"
    :request-web-socket="fetchWebSocketBlocks"
    :socket-send-params="socketSendParams"
  >
    <template #header>Blocks</template>

    <template #cell(nonce)="{ item: { nonce, hash } }">
      <router-link
        :to="{
          name: 'BlockDetails',
          params: { id: hash },
        }"
      >
        {{ nonce }}
      </router-link>
    </template>

    <template #cell(shard)="{ item: { shard } }">
      {{ shard | formatShard }}
    </template>

    <template #cell(transaction)="{ item: { tx_count } }">
      {{ tx_count }}
    </template>

    <template #cell(size)="{ item: { size } }">
      {{ size | formatSize }}
    </template>

    <template #cell(time)="{ item: { timestamp } }">
      <span>{{ timestamp | formatTime }}</span>
    </template>

    <template #cell(epoch)="{ item: { epoch } }">
      <span>{{ epoch }}</span>
    </template>
  </CommonTable>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CommonTable from '@/components/CommonTable.vue';
import { tableFields } from '@/constants/tables';
import pagination from '../../mixins/pagination';

export default {
  name: 'BlocksList',
  components: { CommonTable },
  mixins: [pagination],
  data() {
    return {
      ws: null,
    };
  },
  computed: {
    ...mapGetters(['blocks', 'totalBlocks', 'loadingBlock']),
    fields() {
      return tableFields.blocksFields;
    },
    socketSendParams() {
      return { type: 'subscribe', channel: 'blocks' };
    },
  },
  methods: {
    ...mapActions(['fetchBlocks', 'fetchWebSocketBlocks']),
  },
};
</script>

<style lang="scss"></style>
