<template>
  <div class="accounts wrapper">
    <TableCard
      :fields="fields"
      :items="blocks"
      :total-items="totalBlocks"
      :request-name="fetchBlocks"
    >
      <template #header>Blocks</template>

      <template #cell(nonce)="{ item: { nonce, hash } }">
        <router-link
          :to="{ name: 'BlockDetails', params: { id: hash, nonce: nonce } }"
        >
          {{ nonce }}
        </router-link>
      </template>

      <template #cell(shard)="{ item: { shard } }">
        {{ shard }}
      </template>

      <template #cell(transaction)="{ item: { tx_count } }">
        {{ tx_count }}
      </template>

      <template #cell(size)="{ item: { size } }"> {{ size }} kb </template>

      <template #cell(time)="{ item: { timestamp } }">
        {{ timestamp }}
      </template>
    </TableCard>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableCard from '../components/TableCard.vue';
import { tableFields } from '../constants/tables';

export default {
  name: 'Blocks',
  components: { TableCard },
  computed: {
    ...mapGetters(['blocks', 'totalBlocks']),
    fields() {
      return tableFields.blocksFields;
    },
  },
  methods: {
    ...mapActions(['fetchBlocks']),
  },
};
</script>

<style scoped></style>
