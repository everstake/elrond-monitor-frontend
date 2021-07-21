<template>
  <div class="wrapper">
    <div class="transactions">
      <TableCard>
        <template #header> Transactions </template>
      </TableCard>
    </div>
  </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Transactions',
  components: {
    TableCard,
  },
   async mounted() {
    await this.fetchAccounts();
  },
  computed: {
    ...mapGetters(['accounts']),
  },
  methods: {
    ...mapActions(['fetchAccounts']),
  },
}
</script>

<style lang="scss">

</style>