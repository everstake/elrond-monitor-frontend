<template>
  <TableCard
    :fields="fields"
    :items="blocks"
    :total-items="totalBlocks"
    :request-name="fetchBlocks"
    :loading="loadingBlock"
  >
    <template #header>Blocks</template>

    <template #cell(nonce)="{ item: { nonce, hash } }" class="col-6">
      <router-link
        :to="{ name: 'BlockDetails', params: { id: hash, nonce: nonce } }"
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

    <template #cell(size)="{ item: { size } }"> {{ size }} kb </template>

    <template #cell(time)="{ item: { timestamp } }">
      <span>
        {{ timestamp | formatMsToDays }}
        {{ timestamp | formatMsToHours }}
        {{ timestamp | formatMsToMinutes }}
        {{ timestamp | formatMsToSeconds }}
      </span>
    </template>
  </TableCard>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableCard from '@/components/TableCard.vue';
import { tableFields } from '@/constants/tables';

export default {
  name: 'BlocksList',
  components: { TableCard },
  computed: {
    ...mapGetters(['blocks', 'totalBlocks', 'loadingBlock']),
    fields() {
      return tableFields.blocksFields;
    },
  },
  methods: {
    ...mapActions(['fetchBlocks']),
  },
};
</script>

<style lang="scss">
.table {
  &__cell {
    &--block {
      width: calc(100% / 7);
    }
  }
}
</style>
