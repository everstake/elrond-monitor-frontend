<template>
  <TableInfo :fields="fields" :items="miniblock" :loading="loadingBlock">
    <template #header>Miniblock details</template>

    <template #hash="{ item }">
      {{ item }}
      <BtnCopy :address="item" class="ml-2" />
    </template>

    <template #shard_from="{ item }">{{ item | formatShard }}</template>

    <template #shard_to="{ item }">{{ item | formatShard }}</template>

    <template #block_sender="{ item }">{{ item }}</template>

    <template #block_receiver="{ item }">{{ item }}</template>

    <template #type="{ item }">{{ item }}</template>
  </TableInfo>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../TableInfo.vue';
import BtnCopy from '../BtnCopy.vue';

export default {
  name: 'MiniblockCard',
  components: { TableInfo, BtnCopy },
  data() {
    return {
      fields: [
        {
          key: 'hash',
          label: 'Miniblock Hash',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'shard_from',
          label: 'Sender Shard',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'shard_to',
          label: 'Receiver Shard',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'block_sender',
          label: 'Sender Block',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'block_receiver',
          label: 'Receiver Block',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'type',
          label: 'Type',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['miniblock', 'loadingBlock']),
  },
  created() {
    this.fetchMiniblock(this.$route.params.id);
  },
  methods: {
    ...mapActions(['fetchMiniblock']),
  },
};
</script>

<style scoped></style>
