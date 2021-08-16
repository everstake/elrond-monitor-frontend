<template>
  <TableInfo :fields="fields" :items="miniblock" :loading="loadingBlock">
    <template #header>Miniblock details</template>

    <template #hash="{ item }"> {{ item }} </template>

    <template #shard_from="{ item }">{{ item }}</template>

    <template #shard_to="{ item }">{{ item }}</template>

    <template #block_sender="{ item }">{{ item }}</template>

    <template #block_receiver="{ item }">{{ item }}</template>

    <template #type="{ item }">{{ item }}</template>
  </TableInfo>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../TableInfo.vue';
import { tableFields } from '../../constants/tables';

export default {
  name: 'MiniblockCard',
  components: { TableInfo },
  computed: {
    ...mapGetters(['miniblock', 'loadingBlock']),
    fields() {
      return tableFields.miniblockFields;
    },
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
