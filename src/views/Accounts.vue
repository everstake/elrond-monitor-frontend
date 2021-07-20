<template>
  <div class="accounts wrapper">
    <TableCard :items="accounts">
      <template #header> Accounts </template>
    </TableCard>
  </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Accounts',
  components: {
    TableCard,
  },
  computed: {
    ...mapGetters(['accounts']),
  },
};
</script>

<style lang="scss">
</style>
